//
//  ViewControllerAlarma.swift
//  IPersiana
//
//  Created by Ipad on 9/1/18.
//  Copyright © 2018 Ipad. All rights reserved.
//

import UIKit

class ViewControllerAlarma: UIViewController {

    @IBOutlet weak var datePicker: UIDatePicker!
    @IBOutlet weak var dtext: UILabel!
    var date = Date(timeIntervalSinceNow: -5 * 60)
    var passingDate : Date?
    var timer = Timer()

    override func viewDidLoad() {
        super.viewDidLoad()
        dtext.isHidden=true
        timer  = Timer.scheduledTimer(timeInterval: 10, target: self, selector: #selector(ViewControllerAlarma.testDate), userInfo: nil, repeats: true)
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    func testDate() {
        if Calendar.current.isDate(date, equalTo: Date(), toGranularity: .minute) {
            print("success")
            if let passingDate = passingDate, Calendar.current.isDate(datePicker.date, equalTo: passingDate, toGranularity: .minute)
            {
                // Previous date existing, and is in the same minute as the current date : do nothing
                return
            }
            passingDate = date
            let request = URLRequest(url:URL(string:"https://api.thingspeak.com/update?api_key=HWQ0W58OG3IM7OZM&field5=1")!)
            
            let task=URLSession.shared.dataTask(with: request) { (data:Data?, response:URLResponse?, error:Error?) in
                print("Response: \(response)")
                let strData = String(data: data!, encoding: .utf8)
                print("Body: \(strData)")
            }
            task.resume()
        }
    }
    func donePressed() {
        
        let dateFormatter = DateFormatter()
        dateFormatter.dateStyle = .short
        dateFormatter.timeStyle = .short
        dtext.text = dateFormatter.string(from: date)
        
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */
    @IBAction func guardarAlarm(_ sender: AnyObject) {
        date = datePicker.date
        donePressed()
        dtext.isHidden=false
    }

}
