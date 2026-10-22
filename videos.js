// =====================================================================
// Al Bonian FM — Daily Training Video Additions
// ---------------------------------------------------------------------
// index.html loads this file and adds every entry below to the library.
// To add a video, copy one entry, give it a NEW unique id, and fill in:
//   category : "HVAC" | "Plumbing" | "Electrical" | "Duct Cleaning" | "Water Tank Cleaning"
//              | "Civil Jobs" | "Painting & Waterproofing" | "Landscaping" | "Fire Systems"
//   level    : "Beginner" | "Intermediate" | "Advanced"
//   source   : "YouTube / Field Guild" | "Manufacturer Tech Academy" | "Internal FM SOP"
//              | "OSHA / Safety Standard" | "ToolTech & Equipment Pro"
//   embedUrl : "https://www.youtube.com/embed/<VIDEO_ID>"
//   publishDate : "YYYY-MM-DD" (date added to the portal)
// Keep valid JavaScript: commas between entries, quotes around text.
// =====================================================================
window.ALBONIAN_EXTRA_VIDEOS = [
  {
    "id": "hvac-101",
    "title": "Refrigeration Cycle Basics for New AC Technicians",
    "category": "HVAC",
    "subject": "Fundamentals",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-20",
    "duration": "6:12",
    "embedUrl": "https://www.youtube.com/embed/WdS5tlPJGZc",
    "isNew": true,
    "summary": "How the compressor, condenser, metering device and evaporator move heat, and what high side / low side pressures mean on a working system.",
    "safety": "Never open refrigerant circuits during training walk-downs; observe only on isolated, labelled demo units.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Identify compressor, condenser, metering device and evaporator on the unit.",
      "Trace the hot gas, liquid line and suction line paths.",
      "Explain where the refrigerant boils (evaporator) and condenses (condenser).",
      "Relate high-side and low-side pressures to each component.",
      "Confirm understanding with your supervisor before field gauge work."
    ]
  },
  {
    "id": "hvac-102",
    "title": "3D Walkthrough: AC & Refrigeration System Components",
    "category": "HVAC",
    "subject": "Fundamentals",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-20",
    "duration": "9:47",
    "embedUrl": "https://www.youtube.com/embed/p6GXJdRUz9E",
    "isNew": false,
    "summary": "Animated 3D tour of each refrigeration component, showing how they connect and what each one does in the cycle.",
    "safety": "Treat all refrigerant lines as pressurised. Do not loosen fittings or service valves while learning component locations.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Name each major component as it appears in the animation.",
      "Locate the same components on a site split unit.",
      "Note service valve and access port locations.",
      "Identify filter drier and sight glass where fitted.",
      "Record component nameplate data for the job card."
    ]
  },
  {
    "id": "hvac-103",
    "title": "Clearing a Clogged AC Condensate Drain Line",
    "category": "HVAC",
    "subject": "Preventive Maintenance",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Willman Air Heating and Air Conditioning",
    "publishDate": "2026-10-20",
    "duration": "9:25",
    "embedUrl": "https://www.youtube.com/embed/cFdN2XANBOQ",
    "isNew": false,
    "summary": "Finding the drain blockage, flushing the line and trap, and preventing repeat overflows and ceiling water damage.",
    "safety": "Switch off the indoor unit before working near the drain pan and blower. Use a ladder correctly and protect ceilings and furniture.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate the indoor unit and lay protection under the work area.",
      "Inspect the drain pan for standing water and slime.",
      "Clear the line with a wet/dry vacuum or approved drain gun at the outlet.",
      "Flush with water and confirm free flow to the drain point.",
      "Treat the pan with an approved tablet and record the job."
    ]
  },
  {
    "id": "hvac-104",
    "title": "Fan Coil Units (FCU) Explained",
    "category": "HVAC",
    "subject": "Chilled Water Systems",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "The Engineering Mindset",
    "publishDate": "2026-10-20",
    "duration": "13:19",
    "embedUrl": "https://www.youtube.com/embed/MqM-U8bftCI",
    "isNew": false,
    "summary": "How 2-pipe and 4-pipe fan coil units work, the parts inside (coil, fan, valves, filter, drain pan) and how they connect to chilled water.",
    "safety": "Isolate electrical supply and close chilled water valves before opening any FCU access panel.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Dust Mask"
    ],
    "steps": [
      "Identify the FCU type (2-pipe or 4-pipe) on site.",
      "Locate isolation valves, control valve, strainer and drain pan.",
      "Check filter condition and coil cleanliness.",
      "Confirm fan speeds respond to the thermostat.",
      "Report leaks, corrosion or blocked drains to the supervisor."
    ]
  },
  {
    "id": "hvac-105",
    "title": "R410A Flare Joints for Mini-Split Installation",
    "category": "HVAC",
    "subject": "Installation",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Benjamin Sahlstrom",
    "publishDate": "2026-10-20",
    "duration": "10:25",
    "embedUrl": "https://www.youtube.com/embed/itoro65YpZM",
    "isNew": true,
    "summary": "Cutting, deburring and flaring copper with the correct flare tool, then torquing the flare nut so the joint does not leak.",
    "safety": "Wear eye protection when cutting and flaring copper. Never use an adjustable wrench in place of a torque wrench on flare nuts.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Cut the tube square with a tube cutter and deburr facing down.",
      "Slide the flare nut on before flaring.",
      "Make the flare with an R410A-rated eccentric flare tool.",
      "Inspect the flare for cracks and even shape; apply refrigerant oil.",
      "Tighten to the manufacturer torque value with a torque wrench."
    ]
  },
  {
    "id": "hvac-106",
    "title": "Split AC Installation Step by Step",
    "category": "HVAC",
    "subject": "Installation",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "A2Z Construction",
    "publishDate": "2026-10-20",
    "duration": "15:58",
    "embedUrl": "https://www.youtube.com/embed/9nbK1FFBC7U",
    "isNew": false,
    "summary": "Full split AC installation: indoor bracket and wall hole, outdoor unit mounting, line set, drain, wiring and commissioning.",
    "safety": "Use fall protection for outdoor unit work at height, verify wall services before drilling, and isolate power before wiring.",
    "ppe": [
      "Safety Harness",
      "Safety Glasses",
      "Work Gloves",
      "Dust Mask",
      "Steel Toe Boots"
    ],
    "steps": [
      "Mark and level the indoor bracket; check for hidden services before drilling.",
      "Drill the sleeve hole with a slight downward slope to outside.",
      "Mount the outdoor unit on a level bracket or base with clearances.",
      "Run, connect and pressure-test the line set; route the drain with fall.",
      "Evacuate, open service valves, power up and record operating readings."
    ]
  },
  {
    "id": "hvac-107",
    "title": "Deep Vacuum with a Micron Gauge (Mini-Split)",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "stuzman52",
    "publishDate": "2026-10-20",
    "duration": "15:39",
    "embedUrl": "https://www.youtube.com/embed/vSw-AWqHW0Y",
    "isNew": false,
    "summary": "Pulling a proper vacuum on a new or opened system and using a micron gauge decay test to prove it is dry and leak-free.",
    "safety": "Never run the vacuum pump against a charged system. Check the pump oil and keep hoses short and in good condition.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Connect the vacuum pump and micron gauge with leak-free hoses.",
      "Pull down until the target micron level is reached (typically below 500 microns).",
      "Isolate the pump and watch the decay test for the required time.",
      "If the reading rises steadily, find the leak or moisture before charging.",
      "Break vacuum with refrigerant and record final micron reading."
    ]
  },
  {
    "id": "hvac-108",
    "title": "Nitrogen Pressure Leak Test for AC Systems",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-20",
    "duration": "8:00",
    "embedUrl": "https://www.youtube.com/embed/JaSUDn2VU04",
    "isNew": false,
    "summary": "Pressurising a system with dry nitrogen, holding the test and pinpointing leaks with bubbles before evacuation.",
    "safety": "Always use a nitrogen regulator. Never exceed the system test pressure on the nameplate, and never use oxygen or compressed air.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Fit a regulator to the nitrogen cylinder and purge the hose.",
      "Pressurise slowly to the manufacturer test pressure.",
      "Record pressure and ambient temperature; hold for the specified time.",
      "Bubble-test all joints and flares if the pressure drops.",
      "Release nitrogen safely and proceed to evacuation."
    ]
  },
  {
    "id": "hvac-109",
    "title": "VRF Systems Explained",
    "category": "HVAC",
    "subject": "VRF Systems",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "The Engineering Mindset",
    "publishDate": "2026-10-20",
    "duration": "13:53",
    "embedUrl": "https://www.youtube.com/embed/4i1XgcP1tmw",
    "isNew": false,
    "summary": "How variable refrigerant flow systems serve many indoor units from one outdoor unit, including heat recovery and branch controllers.",
    "safety": "VRF systems carry large refrigerant charges. Do not open pipework without a recovery plan and supervisor approval.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Identify outdoor unit, branch boxes and indoor unit addresses.",
      "Read the system type: heat pump or heat recovery.",
      "Check the central controller for alarms and error codes.",
      "Record indoor unit status and set points.",
      "Escalate refrigerant-side faults to the VRF specialist."
    ]
  },
  {
    "id": "hvac-110",
    "title": "Brazing Copper Lines with Nitrogen Purge",
    "category": "HVAC",
    "subject": "Brazing & Pipework",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-20",
    "duration": "6:04",
    "embedUrl": "https://www.youtube.com/embed/gHD5UA9CikU",
    "isNew": true,
    "summary": "Flowing low-pressure nitrogen through the pipe while brazing so no oxide scale forms inside the refrigerant circuit.",
    "safety": "Hot work permit required. Keep a fire extinguisher at hand, shield nearby surfaces, and ventilate the area.",
    "ppe": [
      "Brazing Goggles (Shade 5)",
      "Leather Gloves",
      "Flame-Resistant Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Obtain a hot work permit and clear combustibles.",
      "Clean and fit the joint; set nitrogen flow to a low purge rate.",
      "Heat the pipe evenly, then apply brazing rod to the joint.",
      "Keep nitrogen flowing until the joint cools.",
      "Inspect the joint and pressure-test before evacuation."
    ]
  },
  {
    "id": "hvac-111",
    "title": "Refrigerant Recovery Machine Setup & Procedure",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-20",
    "duration": "17:18",
    "embedUrl": "https://www.youtube.com/embed/5XMlQCfdiu8",
    "isNew": false,
    "summary": "Hose, cylinder and recovery machine setup, recovering refrigerant to a recovery tank, and safe cylinder fill limits.",
    "safety": "Never overfill recovery cylinders (80% max). Use a scale, check cylinder test date, and never vent refrigerant to atmosphere.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Weigh the empty recovery cylinder and check its test date.",
      "Connect system, machine and cylinder with core removal tools where possible.",
      "Run the recovery machine until the required vacuum level is reached.",
      "Monitor cylinder weight to stay under the 80% fill limit.",
      "Label the cylinder with refrigerant type and weight."
    ]
  },
  {
    "id": "hvac-112",
    "title": "Troubleshooting an AC Compressor That Won't Run",
    "category": "HVAC",
    "subject": "Electrical Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Fox Family Heating and Air Conditioning",
    "publishDate": "2026-10-20",
    "duration": "12:17",
    "embedUrl": "https://www.youtube.com/embed/2FQzhV6pVoM",
    "isNew": false,
    "summary": "Step-by-step diagnosis of a non-running compressor: supply voltage, contactor, capacitor, overload and winding checks.",
    "safety": "Isolate power and discharge capacitors before touching terminals. Live voltage tests only with rated meters and PPE.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Confirm supply voltage at the disconnect and contactor.",
      "Check the contactor pulls in and its contacts are clean.",
      "Discharge and test the run capacitor.",
      "Measure compressor winding resistances (C-S, C-R, S-R) and to ground.",
      "Check the internal overload has reset before condemning the compressor."
    ]
  },
  {
    "id": "hvac-113",
    "title": "EEV Troubleshooting in 3D",
    "category": "HVAC",
    "subject": "VRF Systems",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-20",
    "duration": "11:53",
    "embedUrl": "https://www.youtube.com/embed/fd0kGz0XckE",
    "isNew": false,
    "summary": "How electronic expansion valves are driven, and how to diagnose stuck valves, coil faults and incorrect superheat.",
    "safety": "Isolate power before disconnecting EEV coils. Do not force valve stems open on a charged system.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Read superheat and compare to the target on the controller.",
      "Check the EEV coil resistance against the specification.",
      "Verify the board sends drive pulses to the coil.",
      "Listen and feel for valve movement during reset.",
      "Replace the coil or valve body only after confirming the fault."
    ]
  },
  {
    "id": "hvac-114",
    "title": "Inverter Mini-Split: PCB or Compressor Fault?",
    "category": "HVAC",
    "subject": "Electrical Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Forever Tech English",
    "publishDate": "2026-10-20",
    "duration": "5:01",
    "embedUrl": "https://www.youtube.com/embed/5DlEdo9CnJo",
    "isNew": false,
    "summary": "Testing the inverter board output and compressor windings to decide whether the PCB or the compressor has failed.",
    "safety": "Inverter boards hold dangerous DC voltage after power-off. Wait for capacitors to discharge and verify 0V before handling.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate power and wait for DC bus capacitors to discharge; verify 0V.",
      "Measure compressor U-V-W winding resistances; they should be equal.",
      "Check windings to ground with an insulation tester.",
      "With compressor disconnected, check the board's U-V-W output.",
      "Record the error code history and report findings."
    ]
  },
  {
    "id": "plumb-101",
    "title": "How to Fix a Leaky Faucet",
    "category": "Plumbing",
    "subject": "Fixtures & Faucets",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "The Home Depot",
    "publishDate": "2026-10-20",
    "duration": "1:45",
    "embedUrl": "https://www.youtube.com/embed/SYPFon69vKs",
    "isNew": true,
    "summary": "Shutting off the supply, dismantling the faucet handle and replacing the worn washer or cartridge.",
    "safety": "Close the isolation valve and release pressure before dismantling. Plug the basin so small parts do not fall in.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves"
    ],
    "steps": [
      "Close the angle valves and open the tap to release pressure.",
      "Plug the basin drain.",
      "Remove the handle and retaining nut.",
      "Replace the worn washer, O-ring or cartridge with a matching part.",
      "Reassemble, open the supply and check for drips."
    ]
  },
  {
    "id": "plumb-102",
    "title": "Replacing a Single-Lever Mixer Tap Cartridge",
    "category": "Plumbing",
    "subject": "Fixtures & Faucets",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "HouseWarm",
    "publishDate": "2026-10-20",
    "duration": "3:12",
    "embedUrl": "https://www.youtube.com/embed/w1O60cr5e88",
    "isNew": false,
    "summary": "Removing and replacing a ceramic cartridge in a single-lever mixer to stop dripping or stiff handles.",
    "safety": "Isolate both hot and cold supplies. Hot water can scald; let lines cool before opening.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves"
    ],
    "steps": [
      "Isolate hot and cold supplies and drain the tap.",
      "Remove the decorative cap and handle screw.",
      "Unscrew the cartridge retaining nut.",
      "Fit the new cartridge with the locating lugs aligned.",
      "Restore supply and test full hot/cold movement."
    ]
  },
  {
    "id": "plumb-103",
    "title": "Installing a Toilet Fill Valve (Fluidmaster 400A)",
    "category": "Plumbing",
    "subject": "Toilets & Flushing",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "PlumbingSupply.com",
    "publishDate": "2026-10-20",
    "duration": "3:11",
    "embedUrl": "https://www.youtube.com/embed/_FMZ_wg2h9o",
    "isNew": false,
    "summary": "Removing an old fill valve, setting the new valve height, connecting the refill tube and adjusting water level.",
    "safety": "Shut off and drain the cistern first. Do not overtighten plastic lock nuts.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses"
    ],
    "steps": [
      "Close the angle valve, flush and sponge out the cistern.",
      "Disconnect the supply hose and remove the old valve.",
      "Set the new valve height and fit it with the lock nut hand-tight.",
      "Clip the refill tube onto the overflow pipe.",
      "Turn on the supply and adjust the float to the water line."
    ]
  },
  {
    "id": "plumb-104",
    "title": "Replacing a Toilet Flapper to Stop Running Water",
    "category": "Plumbing",
    "subject": "Toilets & Flushing",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Weekend Home Projects",
    "publishDate": "2026-10-20",
    "duration": "3:51",
    "embedUrl": "https://www.youtube.com/embed/SGdDLHbP-l0",
    "isNew": false,
    "summary": "Diagnosing a running toilet caused by a worn flapper and fitting a universal replacement.",
    "safety": "Shut off the supply and drain the cistern. Wear gloves when handling cistern parts.",
    "ppe": [
      "Nitrile Gloves"
    ],
    "steps": [
      "Close the supply valve and flush to empty the cistern.",
      "Unhook the chain and remove the old flapper.",
      "Clean the flush valve seat.",
      "Fit the new flapper and set chain slack.",
      "Refill and check for silent, leak-free operation."
    ]
  },
  {
    "id": "plumb-105",
    "title": "Cleaning Out a Sink P-Trap",
    "category": "Plumbing",
    "subject": "Drainage",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Justin Nelson's Projects",
    "publishDate": "2026-10-20",
    "duration": "4:09",
    "embedUrl": "https://www.youtube.com/embed/VW3VNUOL0nw",
    "isNew": false,
    "summary": "Removing the P-trap under a basin to clear hair and debris and restore normal draining.",
    "safety": "Place a bucket under the trap; waste water may be contaminated. Wear gloves and eye protection.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses"
    ],
    "steps": [
      "Place a bucket under the trap.",
      "Loosen the slip nuts and remove the trap.",
      "Clear debris from the trap and tailpiece.",
      "Check washers and refit the trap hand-tight.",
      "Run water and check for leaks."
    ]
  },
  {
    "id": "plumb-106",
    "title": "Installing Shut-Off (Angle Stop) Valves",
    "category": "Plumbing",
    "subject": "Valves & Fittings",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "The Home Depot",
    "publishDate": "2026-10-20",
    "duration": "2:22",
    "embedUrl": "https://www.youtube.com/embed/0XmUoCkdhSo",
    "isNew": false,
    "summary": "Fitting compression shut-off valves to supply pipes so fixtures can be isolated for maintenance.",
    "safety": "Isolate the main or zone supply and drain the pipe before cutting or fitting.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Isolate and drain the supply line.",
      "Cut the pipe square and deburr.",
      "Slide on the nut and ferrule, then the valve.",
      "Tighten the compression nut to manufacturer guidance.",
      "Restore supply and check for leaks with the valve closed and open."
    ]
  },
  {
    "id": "plumb-107",
    "title": "Troubleshooting a Sloan Regal Flushometer",
    "category": "Plumbing",
    "subject": "Toilets & Flushing",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "AMRE Supply",
    "publishDate": "2026-10-20",
    "duration": "3:18",
    "embedUrl": "https://www.youtube.com/embed/Upkq8qIwD5M",
    "isNew": false,
    "summary": "Diagnosing short flush, long flush and no-flush problems on commercial flush valves.",
    "safety": "Close the control stop before opening the valve cover. Commercial lines are under higher pressure.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves"
    ],
    "steps": [
      "Close the control stop with a screwdriver.",
      "Remove the cover and inspect the diaphragm or piston.",
      "Clean the bypass orifice.",
      "Replace worn diaphragm or relief valve parts.",
      "Reopen the control stop and adjust flush volume."
    ]
  },
  {
    "id": "plumb-108",
    "title": "Plumbing Venting Basics",
    "category": "Plumbing",
    "subject": "Drainage",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Rising Tide Plumbing",
    "publishDate": "2026-10-20",
    "duration": "4:23",
    "embedUrl": "https://www.youtube.com/embed/YWZOrZLnC9M",
    "isNew": false,
    "summary": "Why drains need vents, how traps lose their seal, and the common vent types found in buildings.",
    "safety": "Vent stacks may carry sewer gas. Do not open vent or drain pipes in enclosed spaces without ventilation.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves"
    ],
    "steps": [
      "Identify the trap and vent for each fixture.",
      "Check for gurgling or slow drains that point to vent problems.",
      "Inspect roof vent terminals for blockages.",
      "Report missing or blocked vents to the supervisor.",
      "Do not install fixtures without a code-compliant vent."
    ]
  },
  {
    "id": "plumb-109",
    "title": "Water Leak Detection Like a Plumbing Pro",
    "category": "Plumbing",
    "subject": "Leak Detection",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Roger Wakefield Plumbing Education",
    "publishDate": "2026-10-20",
    "duration": "4:57",
    "embedUrl": "https://www.youtube.com/embed/ZCmHJ8gvfNg",
    "isNew": false,
    "summary": "Using the water meter, isolation and listening tools to confirm and locate hidden leaks.",
    "safety": "Isolate electrical circuits near wet areas before inspection. Watch for mould in wet cavities.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves",
      "Dust Mask"
    ],
    "steps": [
      "Close all fixtures and read the water meter over a set time.",
      "Isolate zones one at a time to narrow the leak area.",
      "Check visible joints, valves and cisterns first.",
      "Use acoustic or thermal tools to locate concealed leaks.",
      "Mark the location and report before opening walls."
    ]
  },
  {
    "id": "plumb-110",
    "title": "Replacing an Electric Water Heater Element",
    "category": "Plumbing",
    "subject": "Water Heaters",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "Rheem Water Heating",
    "publishDate": "2026-10-20",
    "duration": "4:26",
    "embedUrl": "https://www.youtube.com/embed/2UXYhfvXG9Q",
    "isNew": false,
    "summary": "Isolating power and water, draining down, and replacing a failed heating element with the correct rating.",
    "safety": "Isolate and lock out the heater circuit, verify 0V. Hot water and tank pressure can cause burns.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate and lock out power; verify 0V at the element terminals.",
      "Close the cold supply and drain the tank below the element.",
      "Test element resistance to confirm the fault.",
      "Replace the element with the same voltage and wattage rating.",
      "Refill fully before restoring power; test for leaks."
    ]
  },
  {
    "id": "plumb-111",
    "title": "PPR Pipe Fusion Welding Procedure",
    "category": "Plumbing",
    "subject": "Pipe Joining",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "Emirplast",
    "publishDate": "2026-10-20",
    "duration": "4:23",
    "embedUrl": "https://www.youtube.com/embed/hlnmpQ2ZRwM",
    "isNew": false,
    "summary": "Socket fusion welding of PPR pipe: heater temperature, heating time, insertion depth and cooling.",
    "safety": "The fusion heater runs at about 260°C. Use the stand, keep cable clear and never touch the heating sockets.",
    "ppe": [
      "Heat-Resistant Gloves",
      "Safety Glasses"
    ],
    "steps": [
      "Set the welder to the correct temperature and let it stabilise.",
      "Cut the pipe square and mark the insertion depth.",
      "Heat pipe and fitting together for the specified time.",
      "Join straight without twisting to the marked depth.",
      "Hold still and let the joint cool before pressure testing."
    ]
  },
  {
    "id": "plumb-112",
    "title": "Troubleshooting Sump Pump Problems",
    "category": "Plumbing",
    "subject": "Pumps",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Home Repair Hub",
    "publishDate": "2026-10-20",
    "duration": "8:38",
    "embedUrl": "https://www.youtube.com/embed/CIFdd5qR2jk",
    "isNew": false,
    "summary": "Common reasons sump and drainage pumps fail: float switches, check valves, clogged intakes and power faults.",
    "safety": "Isolate the pump circuit before reaching into the pit. Pits may hold sewage and gas; ventilate and wear gloves.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses",
      "Rubber Boots"
    ],
    "steps": [
      "Isolate power and check the pump supply and RCD.",
      "Inspect the float switch for free movement.",
      "Clear debris from the intake screen.",
      "Check the check valve for backflow.",
      "Test run the pump by raising the float."
    ]
  },
  {
    "id": "plumb-113",
    "title": "Field Testing Backflow Preventers",
    "category": "Plumbing",
    "subject": "Backflow Prevention",
    "level": "Advanced",
    "source": "OSHA / Safety Standard",
    "channel": "USC Foundation for Cross-Connection Control",
    "publishDate": "2026-10-20",
    "duration": "5:45",
    "embedUrl": "https://www.youtube.com/embed/dGq49q2oUQU",
    "isNew": false,
    "summary": "Standard field test procedure for backflow prevention assemblies using a differential pressure test kit.",
    "safety": "Notify the building before isolating supply. Only certified testers sign test reports.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Notify occupants and isolate the downstream supply.",
      "Connect the calibrated test kit to the test cocks.",
      "Test each check valve and relief valve in sequence.",
      "Record readings on the test report.",
      "Restore supply and tag the assembly with the test date."
    ]
  },
  {
    "id": "plumb-114",
    "title": "RIDGID 300 Pipe Threading Machine Operation",
    "category": "Plumbing",
    "subject": "Pipe Joining",
    "level": "Advanced",
    "source": "Manufacturer Tech Academy",
    "channel": "RIDGID Tools",
    "publishDate": "2026-10-20",
    "duration": "11:57",
    "embedUrl": "https://www.youtube.com/embed/vG7q9IL6SSM",
    "isNew": false,
    "summary": "Setting up and operating a power threading machine: cutting, reaming and threading steel pipe safely.",
    "safety": "Use the foot switch only; never wear loose gloves or clothing near rotating pipe. Support long pipe lengths.",
    "ppe": [
      "Safety Glasses",
      "Snug-Fitting Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Set up the machine on a stable stand with pipe supports.",
      "Fit the correct die head for the pipe size.",
      "Cut and ream the pipe end.",
      "Thread with cutting oil until the thread length is correct.",
      "Inspect threads with a gauge and clean chips safely."
    ]
  },
  {
    "id": "plumb-115",
    "title": "Rebuilding a Sloan Flushometer Valve",
    "category": "Plumbing",
    "subject": "Toilets & Flushing",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Plumbwater",
    "publishDate": "2026-10-20",
    "duration": "9:54",
    "embedUrl": "https://www.youtube.com/embed/Xhu8l-L648I",
    "isNew": false,
    "summary": "Full rebuild of a commercial flush valve: diaphragm kit, handle repair kit and vacuum breaker.",
    "safety": "Close the control stop and relieve pressure before opening. Use only matching manufacturer rebuild kits.",
    "ppe": [
      "Safety Glasses",
      "Nitrile Gloves"
    ],
    "steps": [
      "Close the control stop and flush to relieve pressure.",
      "Remove the cover and old diaphragm assembly.",
      "Clean the valve body and seat.",
      "Install the rebuild kit and handle kit.",
      "Reopen, test and adjust the flush."
    ]
  },
  {
    "id": "plumb-116",
    "title": "Finding Hidden Leaks with a Thermal Camera",
    "category": "Plumbing",
    "subject": "Leak Detection",
    "level": "Advanced",
    "source": "ToolTech & Equipment Pro",
    "channel": "Benjamin Sahlstrom",
    "publishDate": "2026-10-20",
    "duration": "8:28",
    "embedUrl": "https://www.youtube.com/embed/gohEc3u3Ot4",
    "isNew": false,
    "summary": "Using a thermal imaging camera to trace hot and cold water leaks behind walls and under floors.",
    "safety": "Thermal images point to likely leaks; confirm with moisture meter before opening finishes.",
    "ppe": [
      "Safety Glasses",
      "Dust Mask"
    ],
    "steps": [
      "Run hot water to create a temperature difference.",
      "Scan walls, floors and ceilings along the pipe route.",
      "Mark suspect areas on the image and the wall.",
      "Confirm with a moisture meter.",
      "Report findings with images before any opening works."
    ]
  },
  {
    "id": "elec-101",
    "title": "How to Use a Multimeter (Beginners)",
    "category": "Electrical",
    "subject": "Test Instruments",
    "level": "Beginner",
    "source": "ToolTech & Equipment Pro",
    "channel": "Ratchets And Wrenches",
    "publishDate": "2026-10-20",
    "duration": "8:08",
    "embedUrl": "https://www.youtube.com/embed/TdUK6RPdIrA",
    "isNew": true,
    "summary": "Measuring voltage, resistance, continuity and current with a digital multimeter, and choosing the right range and lead socket.",
    "safety": "Use a CAT III/IV rated meter. Prove the meter on a known source before and after testing (prove-test-prove).",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Inspect leads and meter for damage.",
      "Select the correct function and plug leads into the right sockets.",
      "Prove the meter on a known live source.",
      "Take the measurement keeping fingers behind the probe guards.",
      "Re-prove the meter and record the reading."
    ]
  },
  {
    "id": "elec-102",
    "title": "Using a Non-Contact Voltage Tester",
    "category": "Electrical",
    "subject": "Test Instruments",
    "level": "Beginner",
    "source": "ToolTech & Equipment Pro",
    "channel": "Flannel Guy DIY",
    "publishDate": "2026-10-20",
    "duration": "6:49",
    "embedUrl": "https://www.youtube.com/embed/vLgc29iZHaA",
    "isNew": false,
    "summary": "How non-contact voltage detectors work, how to use them, and why they are a first check, not proof of dead.",
    "safety": "A non-contact tester alone is not proof of isolation. Always confirm with a two-pole voltage tester.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Test the detector on a known live source.",
      "Hold the tip near the conductor or outlet slot.",
      "Watch for light and beep indication.",
      "Confirm any 'dead' result with a two-pole tester.",
      "Re-check the detector on a live source after use."
    ]
  },
  {
    "id": "elec-103",
    "title": "How to Use a Clamp Meter",
    "category": "Electrical",
    "subject": "Test Instruments",
    "level": "Beginner",
    "source": "ToolTech & Equipment Pro",
    "channel": "ToolBoom",
    "publishDate": "2026-10-20",
    "duration": "6:38",
    "embedUrl": "https://www.youtube.com/embed/Bc_EQea0mKY",
    "isNew": false,
    "summary": "Measuring load current with a clamp meter around a single conductor, plus voltage and continuity functions.",
    "safety": "Clamp only one conductor at a time and keep hands behind the clamp guard. Use rated PPE near live panels.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Select AC amps and the correct range.",
      "Open the jaw and clamp around a single conductor.",
      "Keep the conductor centred in the jaw.",
      "Read and record the current.",
      "Compare with the equipment nameplate rating."
    ]
  },
  {
    "id": "elec-104",
    "title": "How Three-Phase Electricity Works",
    "category": "Electrical",
    "subject": "Fundamentals",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "The Engineering Mindset",
    "publishDate": "2026-10-20",
    "duration": "7:53",
    "embedUrl": "https://www.youtube.com/embed/4oRT7PoXSS0",
    "isNew": false,
    "summary": "Basics of three-phase supply: phases, neutral, phase and line voltages, and why buildings use three-phase power.",
    "safety": "Three-phase circuits carry 400V between phases. Never work on them live without authorisation.",
    "ppe": [
      "Safety Glasses"
    ],
    "steps": [
      "Identify L1, L2, L3, N and PE in a distribution board.",
      "Note phase-to-neutral (230V) and phase-to-phase (400V) values.",
      "Identify three-phase loads such as motors and chillers.",
      "Check phase rotation labels at the panel.",
      "Ask the supervisor before testing any three-phase circuit."
    ]
  },
  {
    "id": "elec-105",
    "title": "Terminating a BS 1363 Twin Socket Outlet",
    "category": "Electrical",
    "subject": "Wiring Accessories",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-10-20",
    "duration": "14:34",
    "embedUrl": "https://www.youtube.com/embed/PJ97M42rzfI",
    "isNew": false,
    "summary": "Correct stripping, terminating and fixing of a UK-style twin socket (the standard used in the UAE).",
    "safety": "Isolate the circuit, lock off and prove dead before removing any socket.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate, lock off and prove the circuit dead.",
      "Strip the conductors to the correct length without nicking.",
      "Terminate L (brown), N (blue) and E (green/yellow) firmly.",
      "Sleeve the earth and fold conductors neatly into the box.",
      "Fix the socket level, restore power and test polarity."
    ]
  },
  {
    "id": "elec-106",
    "title": "Basic Contactor Wiring: 3-Phase Motor Start/Stop",
    "category": "Electrical",
    "subject": "Motor Control",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "The Electrical Guy",
    "publishDate": "2026-10-20",
    "duration": "3:03",
    "embedUrl": "https://www.youtube.com/embed/9x9QdL9N7vc",
    "isNew": true,
    "summary": "Power and control wiring for a contactor driving a three-phase motor with start and stop push buttons.",
    "safety": "Work on de-energised panels only. Verify isolation of both power and control supplies.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate power and control supplies; prove dead.",
      "Wire L1-L2-L3 through the contactor main contacts to the motor.",
      "Wire the stop (NC) and start (NO) buttons in the coil circuit.",
      "Add the holding contact across the start button.",
      "Test the control circuit before connecting the motor load."
    ]
  },
  {
    "id": "elec-107",
    "title": "Contactor & Overload Relay: How They Work and Wiring",
    "category": "Electrical",
    "subject": "Motor Control",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Joel Teaches Electrical",
    "publishDate": "2026-10-20",
    "duration": "16:32",
    "embedUrl": "https://www.youtube.com/embed/e3EVLOMfHMI",
    "isNew": false,
    "summary": "What contactors and thermal overload relays do, how to set the overload to the motor FLA, and how to wire them.",
    "safety": "Set overloads to the motor nameplate FLA. Never bypass an overload to keep a motor running.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Read the motor nameplate full load amps.",
      "Set the overload relay dial to the FLA.",
      "Wire the overload NC contact into the coil circuit.",
      "Test trip function with the test button.",
      "Record overload setting on the panel schedule."
    ]
  },
  {
    "id": "elec-108",
    "title": "3-Wire Start/Stop Motor Control Circuit",
    "category": "Electrical",
    "subject": "Motor Control",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AccessToPower",
    "publishDate": "2026-10-20",
    "duration": "11:12",
    "embedUrl": "https://www.youtube.com/embed/6ujtUToPiZs",
    "isNew": false,
    "summary": "Ladder diagram and wiring of a 3-wire start/stop circuit with a seal-in contact.",
    "safety": "Control circuits can still be live when the main isolator is off. Verify all sources are isolated.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Read the ladder diagram and identify each device.",
      "Wire stop button, start button and coil in series.",
      "Add the seal-in auxiliary contact.",
      "Prove the circuit dead before testing continuity.",
      "Energise and confirm start, hold-in and stop operation."
    ]
  },
  {
    "id": "elec-109",
    "title": "How to Test RCDs",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "John Ward (jwflame)",
    "publishDate": "2026-10-20",
    "duration": "14:57",
    "embedUrl": "https://www.youtube.com/embed/ZaAUg75BR5Y",
    "isNew": false,
    "summary": "Testing residual current devices with a multifunction tester: trip times at rated current and the test button check.",
    "safety": "RCD testing disconnects supply to circuits. Warn occupants and protect sensitive equipment before testing.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Inform occupants and switch off sensitive loads.",
      "Press the RCD test button to check mechanical operation.",
      "Connect the multifunction tester at the circuit outlet.",
      "Run 1x and 5x trip-time tests at 0° and 180°.",
      "Record trip times and reset the device."
    ]
  },
  {
    "id": "elec-110",
    "title": "Checking a Faulty Contactor with a Multimeter",
    "category": "Electrical",
    "subject": "Motor Control",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "The Electrical Guy",
    "publishDate": "2026-10-20",
    "duration": "6:42",
    "embedUrl": "https://www.youtube.com/embed/wqowOKDciyw",
    "isNew": false,
    "summary": "Testing contactor coil resistance and main contact continuity to find a failed contactor.",
    "safety": "Remove the contactor from service or isolate the panel and prove dead before testing.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate the panel and prove dead.",
      "Measure coil resistance across A1-A2.",
      "Check main contacts are open when de-energised.",
      "Press the manual actuator and confirm contacts close.",
      "Replace the contactor if coil is open or contacts are burnt."
    ]
  },
  {
    "id": "elec-111",
    "title": "ATS Panel Wiring: Automatic Changeover for Generators",
    "category": "Electrical",
    "subject": "Power Distribution",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Electro Academy",
    "publishDate": "2026-10-20",
    "duration": "10:02",
    "embedUrl": "https://www.youtube.com/embed/WKh5D4jTwKQ",
    "isNew": false,
    "summary": "How an automatic transfer switch moves load between mains and generator, and the panel wiring involved.",
    "safety": "Both mains and generator can be live. Isolate both sources and lock out the generator start before work.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Identify mains, generator and load terminals.",
      "Isolate both sources and disable generator auto-start.",
      "Inspect wiring, interlocks and control relays.",
      "Check timer and voltage sensing settings.",
      "Restore sources and perform a supervised transfer test."
    ]
  },
  {
    "id": "elec-112",
    "title": "Variable Frequency Drives (VFD) Explained",
    "category": "Electrical",
    "subject": "Drives & Motors",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "The Engineering Mindset",
    "publishDate": "2026-10-20",
    "duration": "15:18",
    "embedUrl": "https://www.youtube.com/embed/yEPe7RDtkgo",
    "isNew": false,
    "summary": "How a VFD converts AC to DC and back to variable-frequency AC to control motor speed (rectifier, DC bus, IGBT inverter).",
    "safety": "VFD DC bus capacitors stay charged after isolation. Wait the time on the label and verify 0V before opening.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Identify rectifier, DC bus and inverter sections.",
      "Note the discharge time on the drive label.",
      "Read the drive display for frequency, current and faults.",
      "Check cooling fans and heatsink cleanliness.",
      "Report fault codes with the drive model number."
    ]
  },
  {
    "id": "elec-113",
    "title": "Star-Delta Starter Control Wiring",
    "category": "Electrical",
    "subject": "Motor Control",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "The Electrical Guy",
    "publishDate": "2026-10-20",
    "duration": "13:31",
    "embedUrl": "https://www.youtube.com/embed/vVs_1oEVMgQ",
    "isNew": false,
    "summary": "Control wiring for a star-delta starter: main, star and delta contactors, timer and interlocks.",
    "safety": "Wrong star-delta wiring causes phase-to-phase short circuits. Check interlocks before energising.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate and prove dead.",
      "Identify main, star and delta contactors and the timer.",
      "Wire the timer to switch from star to delta.",
      "Wire electrical interlocks between star and delta contactors.",
      "Test the control circuit with the motor disconnected first."
    ]
  },
  {
    "id": "elec-114",
    "title": "Troubleshooting a Non-Working VFD",
    "category": "Electrical",
    "subject": "Drives & Motors",
    "level": "Advanced",
    "source": "ToolTech & Equipment Pro",
    "channel": "VFDs.com",
    "publishDate": "2026-10-20",
    "duration": "8:49",
    "embedUrl": "https://www.youtube.com/embed/sKbO6ghAO8o",
    "isNew": false,
    "summary": "Systematic diagnosis of a drive that will not power up or run: input supply, DC bus, fault history and output checks.",
    "safety": "Lethal DC voltage remains after isolation. Measure the DC bus to confirm discharge before touching components.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Check input voltage on all three phases.",
      "Read and record the fault history.",
      "Measure DC bus voltage with the drive powered and after discharge.",
      "Check input diodes and output IGBTs with the diode test.",
      "Check motor and cable insulation before restarting."
    ]
  },
  {
    "id": "elec-115",
    "title": "External Earth Fault Loop Impedance (Ze) Test",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-10-20",
    "duration": "5:32",
    "embedUrl": "https://www.youtube.com/embed/Cjr6uzXKixE",
    "isNew": false,
    "summary": "Measuring Ze at the origin of the installation and removing parallel earth paths to get a true reading.",
    "safety": "This is a live test. Only authorised electricians with a calibrated tester and full PPE may carry it out.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Obtain authorisation and isolate the installation.",
      "Disconnect the main earthing conductor to remove parallel paths.",
      "Connect the loop tester between line and the supply earth.",
      "Record Ze and compare with the maximum permitted value.",
      "Reconnect the main earth before restoring supply."
    ]
  },
  {
    "id": "elec-116",
    "title": "Motor Insulation Resistance Testing",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "The Electrical Guy",
    "publishDate": "2026-10-20",
    "duration": "9:35",
    "embedUrl": "https://www.youtube.com/embed/BD7_7a77m4M",
    "isNew": false,
    "summary": "Using an insulation resistance tester (megger) to check motor windings to earth and between phases.",
    "safety": "Insulation testers produce high DC voltage. Isolate the motor, disconnect drives and discharge windings after testing.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate and lock out the motor; disconnect VFDs or electronics.",
      "Select the test voltage (typically 500V or 1000V).",
      "Test each winding to earth and phase to phase.",
      "Record readings and compare with minimum acceptable values.",
      "Discharge windings and reconnect correctly."
    ]
  },
  {
    "id": "hvac-115",
    "title": "How to Clean a Condenser Coil",
    "category": "HVAC",
    "subject": "Preventive Maintenance",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-21",
    "duration": "4:03",
    "embedUrl": "https://www.youtube.com/embed/PGC2gOkOSTk",
    "isNew": true,
    "summary": "A lint-clogged condenser is foam-cleaned and rinsed inside-out, with before-and-after readings showing lower head pressure and discharge air temperature.",
    "safety": "Isolate and lock out the outdoor unit at the disconnect, wear chemical-resistant gloves and eye protection with coil cleaner, and avoid bending fins with high-pressure water.",
    "ppe": [
      "Chemical-Resistant Gloves",
      "Safety Glasses",
      "Steel Toe Boots"
    ],
    "steps": [
      "Record condenser air split and pressures, then isolate and lock out power.",
      "Remove the top and side panels and pre-wet the coil.",
      "Apply diluted coil cleaner as foam from the bottom up and let it dwell 5–10 minutes.",
      "Rinse from the inside out, top to bottom, without bending fins.",
      "Reassemble, restore power and re-check pressures and air split."
    ]
  },
  {
    "id": "plumb-117",
    "title": "How to Install a Thermal Expansion Tank",
    "category": "Plumbing",
    "subject": "Water Heaters",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "Amtrol Inc.",
    "publishDate": "2026-10-21",
    "duration": "2:30",
    "embedUrl": "https://www.youtube.com/embed/H8beYeGxgJg",
    "isNew": true,
    "summary": "Amtrol shows how to measure line pressure, set the tank precharge to match, and install a Therm-X-Trol expansion tank on the cold supply to a water heater.",
    "safety": "Isolate the cold supply and switch off the water heater before cutting in, relieve system pressure, and support the tank so its weight is not carried by the pipework.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Measure static line pressure with a hose-thread gauge at a spigot.",
      "Set the tank air precharge to match line pressure using a tyre gauge and pump.",
      "Isolate the cold supply, switch off the heater and relieve pressure.",
      "Install the tank on the cold inlet with sealed threads and proper support.",
      "Restore water, check for leaks and return the heater to service."
    ]
  },
  {
    "id": "elec-117",
    "title": "Earth Fault Loop Impedance (Zs) Testing on 16A Single & 3-Phase Industrial Sockets",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-10-21",
    "duration": "3:30",
    "embedUrl": "https://www.youtube.com/embed/Y7NPT8sQINY",
    "isNew": true,
    "summary": "Measuring Zs on 16A single-phase and 400V three-phase industrial socket outlets, testing L1, L2 and L3 in turn and comparing results with the protective device's maximum Zs.",
    "safety": "Zs testing is a live test: use a calibrated loop tester with GS38-compliant leads, confirm the RCD and circuit details first, and keep others clear of the outlet under test.",
    "ppe": [
      "1000V Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Steel Toe Boots"
    ],
    "steps": [
      "Confirm circuit details and look up maximum Zs for the protective device.",
      "Check the loop tester and leads, then connect via a suitable test plug.",
      "Measure Zs on the single-phase outlet (L-E).",
      "Measure Zs on each phase L1, L2 and L3 of the three-phase outlet.",
      "Record results and compare with BS 7671 limits (80% rule)."
    ]
  },
  {
    "id": "hvac-116",
    "title": "Charging a Mini-Split by Weight (Mitsubishi)",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-22",
    "duration": "9:10",
    "embedUrl": "https://www.youtube.com/embed/QpzOSQt2fpI",
    "isNew": true,
    "summary": "Calculating the extra refrigerant for the installed line length from the nameplate and weighing it into a ductless mini-split with a scale.",
    "safety": "Wear eye protection and refrigerant gloves; keep the cylinder upright on the scale and never overcharge beyond the calculated weight.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Read the factory charge and pre-charged line length on the outdoor unit nameplate.",
      "Measure the actual line set length and calculate the additional charge required.",
      "Evacuate the system and confirm a stable micron reading.",
      "Zero the scale and weigh in the calculated refrigerant through the suction port.",
      "Record the total charge, then check operating pressures and temperatures."
    ]
  },
  {
    "id": "plumb-118",
    "title": "Checking & Adjusting Pressure Tank Pre-Charge",
    "category": "Plumbing",
    "subject": "Pumps",
    "level": "Advanced",
    "source": "Manufacturer Tech Academy",
    "channel": "R.C. Worst & Co., Inc.",
    "publishDate": "2026-10-22",
    "duration": "5:57",
    "embedUrl": "https://www.youtube.com/embed/w21qa2bMUh8",
    "isNew": true,
    "summary": "Testing and setting the air pre-charge of a pressure tank relative to the pump cut-in pressure to stop short-cycling of booster pumps.",
    "safety": "Isolate and lock out the pump, close the tank isolation valve and drain the water side before checking air pressure.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Isolate and lock out the pump supply.",
      "Close the tank isolation valve and drain all water from the tank.",
      "Check air pre-charge at the Schrader valve with a tyre gauge.",
      "Set pre-charge about 2 psi (0.15 bar) below the pump cut-in pressure.",
      "Refill, restore power and watch for normal cut-in/cut-out cycling."
    ]
  },
  {
    "id": "elec-118",
    "title": "Electrical Safety Basics for Non-Electricians",
    "category": "Electrical",
    "subject": "Safety & Isolation",
    "level": "Beginner",
    "source": "Manufacturer Tech Academy",
    "channel": "Schneider Electric",
    "publishDate": "2026-10-22",
    "duration": "9:21",
    "embedUrl": "https://www.youtube.com/embed/ggJo6m8NZtA",
    "isNew": true,
    "summary": "Core electrical hazards (shock, arc flash, fire), safe distances and what non-electrical staff must and must not do around electrical equipment.",
    "safety": "Never open panels or touch electrical equipment unless trained and authorised; report damaged cables, sockets and panels immediately.",
    "ppe": [
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Identify electrical hazards in your work area (panels, cables, sockets).",
      "Keep panel doors closed and clear access in front of electrical rooms.",
      "Do not use damaged cables, plugs or extension leads.",
      "Never attempt electrical repairs unless authorised; call a qualified electrician.",
      "Report wet areas, burning smells or tripping breakers to the supervisor."
    ]
  }
];
