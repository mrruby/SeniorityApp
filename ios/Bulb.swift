//
//  Bulb.swift
//  seniorityApp
//
//  Created by Dawid Urbas on 22/03/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation

@objc(Bulb)class Bulb: NSObject {

@objc static var isOn = false
  
@objc static func requiresMainQueueSetup() -> Bool {
  return true
}

@objc func turnOn() {
  Bulb.isOn = true
  print("Bulb is now ON")
}
  
@objc func turnOff() {
  Bulb.isOn = false
  print("Bulb is now OFF")
}
  
@objc func getStatus(_ callback: RCTResponseSenderBlock) {
  callback([NSNull(), Bulb.isOn])
}
}
