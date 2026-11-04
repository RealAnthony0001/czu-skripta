import sys, struct
def ole_stream(d, want):
    hdr=d[:512]; ss=1<<struct.unpack('<H',hdr[30:32])[0]; mss=1<<struct.unpack('<H',hdr[32:34])[0]
    nfat,dirstart,_,cutoff,minifat_start,nminifat,difat_start,ndifat=struct.unpack('<IIIIIIII',hdr[44:48]+hdr[48:52]+hdr[52:56]+hdr[56:60]+hdr[60:64]+hdr[64:68]+hdr[68:72]+hdr[72:76]) if False else (None,)*8
    nfat=struct.unpack('<I',hdr[44:48])[0]; dirstart=struct.unpack('<I',hdr[48:52])[0]; cutoff=struct.unpack('<I',hdr[56:60])[0]
    mfs=struct.unpack('<I',hdr[60:64])[0]; difat=list(struct.unpack('<109I',hdr[76:512]))
    sec=lambda i:d[512+i*ss:512+(i+1)*ss]
    fat=[]
    for s in difat:
        if s>=0xFFFFFFFA: continue
        fat+=struct.unpack('<%dI'%(ss//4),sec(s))
    def chain(s):
        o=b''
        while s<0xFFFFFFFA: o+=sec(s); s=fat[s]
        return o
    dirs=chain(dirstart); ents=[]
    for i in range(0,len(dirs),128):
        e=dirs[i:i+128]; nl=struct.unpack('<H',e[64:66])[0]
        ents.append((e[:max(nl-2,0)].decode('utf-16le'),e[66],struct.unpack('<I',e[116:120])[0],struct.unpack('<I',e[120:124])[0]))
    root=ents[0]; ministream=chain(root[2]); minifat=struct.unpack('<%dI'%(len(chain(mfs))//4),chain(mfs)) if mfs<0xFFFFFFFA else ()
    for n,t,s,sz in ents:
        if n==want:
            if sz<cutoff:
                o=b''
                while s<0xFFFFFFFA: o+=ministream[s*mss:(s+1)*mss]; s=minifat[s]
                return o[:sz]
            return chain(s)[:sz]
def walk(b,out):
    p=0
    while p+8<=len(b):
        vi,t,l=struct.unpack('<HHI',b[p:p+8]); ver=vi&0xF; body=b[p+8:p+8+l]
        if ver==0xF: 
            if t==1006: out.append('\n=== SLIDE ===\n')
            if t==1008: out.append('\n=== NOTES ===\n')
            walk(body,out)
        elif t==0x0FA0: out.append(body.decode('utf-16le','replace').replace('\r','\n')+'\n')
        elif t==0x0FA8: out.append(body.decode('cp1250','replace').replace('\r','\n')+'\n')
        p+=8+l
d=open(sys.argv[1],'rb').read(); s=ole_stream(d,'PowerPoint Document'); out=[]; walk(s,out)
n=0; res=[]
for x in out:
    if x.startswith('\n=== SLIDE'): n+=1; res.append('=== SLIDE %d ===\n'%n)
    elif x.startswith('\n=== NOTES'): res.append('--- poznámky ---\n')
    else: res.append(x)
print(''.join(res))
