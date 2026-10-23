// Vyrenderuje HTML soubory do PNG 1280×720 přes WebKit: swift shot.swift <root> a.html a.png [b.html b.png …]
// SHOT_DELAY=<s> prodlouží čekání před snímkem (animované stránky, např. myšlenková mapa)
import AppKit
import WebKit

let args = Array(CommandLine.arguments.dropFirst())
let root = URL(fileURLWithPath: args[0])
var jobs = stride(from: 1, to: args.count - 1, by: 2).map { (args[$0], args[$0 + 1]) }

class Shooter: NSObject, WKNavigationDelegate {
  let web = WKWebView(frame: NSRect(x: 0, y: 0, width: 1280, height: 720))
  override init() { super.init(); web.navigationDelegate = self; next() }
  func next() {
    guard !jobs.isEmpty else { exit(0) }
    web.loadFileURL(URL(fileURLWithPath: jobs[0].0), allowingReadAccessTo: root)
  }
  func webView(_ w: WKWebView, didFinish _: WKNavigation!) {
    DispatchQueue.main.asyncAfter(deadline: .now() + (Double(ProcessInfo.processInfo.environment["SHOT_DELAY"] ?? "") ?? 0.15)) { // nechat doběhnout layout a fonty
      let cfg = WKSnapshotConfiguration(); cfg.snapshotWidth = 1280
      w.takeSnapshot(with: cfg) { img, err in
        guard let img, let tiff = img.tiffRepresentation, let png = NSBitmapImageRep(data: tiff)?.representation(using: .png, properties: [:])
        else { FileHandle.standardError.write("snapshot failed: \(String(describing: err))\n".data(using: .utf8)!); exit(1) }
        try! png.write(to: URL(fileURLWithPath: jobs.removeFirst().1))
        self.next()
      }
    }
  }
}

let app = NSApplication.shared
let s = Shooter()
app.run()
