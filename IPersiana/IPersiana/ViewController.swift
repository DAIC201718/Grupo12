//
//  ViewController.swift
//  IPersiana
//
//  Created by Ipad on 1/1/15.
//  Copyright © 2015 Ipad. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var temp: UILabel!
    @IBOutlet weak var lum: UILabel!
    @IBOutlet weak var est: UILabel!
    @IBOutlet weak var nomTemp: UILabel!
    @IBOutlet weak var nomLum: UILabel!
    @IBOutlet weak var nomEst: UILabel!
    @IBOutlet weak var carga: UIActivityIndicatorView!
    override func viewDidLoad() {
        super.viewDidLoad()
        self.temp.isHidden=true
        self.lum.isHidden=true
        self.est.isHidden=true
        
        let url = URL(string: "https://api.thingspeak.com/channels/396464/feeds/last.json?api_key=36RN3KRNK3DGZTLH")
        let task = URLSession.shared.dataTask(with: url!) { (data, response, error) in
            if let data = data {
                do {
                    // Convert the data to JSON
                    let jsonSerialized = try JSONSerialization.jsonObject(with: data, options: []) as? [String : Any]
                    
                    if let json = jsonSerialized, let field1 = json["field1"], let field2 = json["field2"], let field3 = json["field3"] {
                        let tempe=String(describing: field1)
                        let lumi=String(describing: field2)
                        let esta=String(describing: field3)
                        if (tempe != "<null>" && lumi != "<null>" && esta != "<null>"){
                            self.temp.text=tempe+" ºC"
                            let index = lumi.index(lumi.startIndex, offsetBy: 6)
                            let subLumi=lumi.substring(to: index)
                            self.lum.text=subLumi+" %"
                            if esta=="1"{
                                self.est.text="Abierta"
                            }else{
                                self.est.text="Cerrada"
                            }
                            
                        } else if (tempe != "<null>" && lumi != "<null>" && esta == "<null>"){
                            self.temp.text=tempe+" ºC"
                            let index = lumi.index(lumi.startIndex, offsetBy: 6)
                            let subLumi=lumi.substring(to: index)
                            self.lum.text=subLumi+" %"
                        }
                        self.temp.isHidden=false
                        self.lum.isHidden=false
                        self.est.isHidden=false
                    }
                }  catch let error as NSError {
                    print(error.localizedDescription)
                }
            } else if let error = error {
                print(error.localizedDescription)
            }
        }
        
        task.resume()
        

            
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func refrescar(_ sender: AnyObject) {
        
        self.temp.isHidden=true
        self.lum.isHidden=true
        self.est.isHidden=true
        
        let url = URL(string: "https://api.thingspeak.com/channels/396464/feeds/last.json?api_key=36RN3KRNK3DGZTLH")
        let task = URLSession.shared.dataTask(with: url!) { (data, response, error) in
            if let data = data {
                do {
                    // Convert the data to JSON
                    let jsonSerialized = try JSONSerialization.jsonObject(with: data, options: []) as? [String : Any]
                    
                    if let json = jsonSerialized, let field1 = json["field1"], let field2 = json["field2"], let field3 = json["field3"] {
                        let tempe=String(describing: field1)
                        let lumi=String(describing: field2)
                        let esta=String(describing: field3)
                        print(esta)
                        if (tempe != "<null>" && lumi != "<null>" && esta != "<null>"){
                            print("Llega1")
                            self.temp.text=tempe+" ºC"
                            let index = lumi.index(lumi.startIndex, offsetBy: 6)
                            let subLumi=lumi.substring(to: index)
                            self.lum.text=subLumi+" %"
                            if esta=="1"{
                                self.est.text="Abierta"
                            }else{
                                self.est.text="Cerrada"
                            }
                        } else if (tempe != "<null>" && lumi != "<null>" && esta == "<null>"){
                            self.temp.text=tempe+" ºC"
                            let index = lumi.index(lumi.startIndex, offsetBy: 6)
                            let subLumi=lumi.substring(to: index)
                            self.lum.text=subLumi+" %"
                            print("LLega2")
                        }
                        self.temp.isHidden=false
                        self.lum.isHidden=false
                        self.est.isHidden=false
                    }
                }  catch let error as NSError {
                    print(error.localizedDescription)
                }
            } else if let error = error {
                print(error.localizedDescription)
            }
        }
        
        task.resume()
        
        
    }

    @IBAction func cerrarPersiana(_ sender: AnyObject) {
        let request = URLRequest(url:URL(string:"https://api.thingspeak.com/update?api_key=HWQ0W58OG3IM7OZM&field5=2")!)
        
        let task=URLSession.shared.dataTask(with: request) { (data:Data?, response:URLResponse?, error:Error?) in
            print("Response: \(response)")
            let strData = String(data: data!, encoding: .utf8)
            print("Body: \(strData)")
        }
        task.resume()
    }
    @IBAction func abrirPersiana(_ sender: AnyObject) {
        let request = URLRequest(url:URL(string:"https://api.thingspeak.com/update?api_key=HWQ0W58OG3IM7OZM&field5=1")!)
        
        let task=URLSession.shared.dataTask(with: request) { (data:Data?, response:URLResponse?, error:Error?) in
            print("Response: \(response)")
            let strData = String(data: data!, encoding: .utf8)
            print("Body: \(strData)")
        }
        task.resume()
    }
}

