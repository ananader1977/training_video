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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
    "isNew": false,
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
  },
  {
    "id": "hvac-117",
    "title": "Diagnosing Liquid Line Restriction vs Low Airflow vs Low Charge",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-23",
    "duration": "10:00",
    "embedUrl": "https://www.youtube.com/embed/zOd2G10F-YY",
    "isNew": false,
    "summary": "Using gauge pressures, saturation temperatures, superheat and subcooling to tell a liquid line restriction apart from low indoor airflow or a low refrigerant charge.",
    "safety": "Wear eye protection and refrigerant gloves when connecting gauges, keep clear of fan blades and live terminals, and isolate power before opening electrical panels.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Grade Leather Gloves",
      "Steel Toe Boots"
    ],
    "steps": [
      "Check indoor airflow first: filter, blower and evaporator coil condition.",
      "Connect gauges and temperature clamps to the suction and liquid lines.",
      "Measure suction/liquid pressures and calculate superheat and subcooling.",
      "Compare readings: high subcooling with high superheat points to a restriction; low subcooling with high superheat points to low charge.",
      "Check for a temperature drop across the filter drier or metering device, then record findings and the corrective action."
    ]
  },
  {
    "id": "plumb-119",
    "title": "Replacing a Toilet Wax Ring Seal",
    "category": "Plumbing",
    "subject": "Sanitary Fixtures",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Just Az.com productions",
    "publishDate": "2026-10-23",
    "duration": "5:00",
    "embedUrl": "https://www.youtube.com/embed/ae0TzEAzDZw",
    "isNew": false,
    "summary": "Removing a toilet, cleaning the flange and fitting a new wax ring seal to stop leaks and sewer odour at the base of the pan.",
    "safety": "Isolate and drain the water supply first, lift the pan with a proper two-hand grip or a second person, and wear gloves when handling the soiled flange.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses",
      "Knee Pads"
    ],
    "steps": [
      "Close the angle valve, flush and sponge out the remaining water, then disconnect the supply hose.",
      "Remove the floor bolt nuts and lift the toilet straight up off the flange.",
      "Scrape off the old wax and inspect the flange and bolts for damage.",
      "Fit the new wax ring and set the toilet straight down onto the flange bolts.",
      "Tighten the nuts evenly without over-tightening, reconnect the supply and check for leaks after several flushes."
    ]
  },
  {
    "id": "elec-119",
    "title": "Ring Final Circuit Continuity & Polarity Testing (r1, rn, r2)",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-10-23",
    "duration": "13:30",
    "embedUrl": "https://www.youtube.com/embed/UesYHVsZD-E",
    "isNew": false,
    "summary": "Three-stage dead test of a BS 7671 ring final circuit: end-to-end r1/rn/r2 readings, figure-of-8 cross-connection checks at every socket and fused spur, and recording R1+R2 on the test sheet.",
    "safety": "Safely isolate, lock off and prove dead with an approved voltage indicator before disconnecting the ring conductors, and re-prove your tester on a known source.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the circuit at the board, lock off and prove dead.",
      "Measure end-to-end resistance of line (r1), neutral (rn) and CPC (r2) and confirm they are consistent.",
      "Cross-connect line and neutral (figure of 8) and test at every socket for similar readings.",
      "Cross-connect line and CPC and test at every socket and fused spur to get R1+R2 and confirm polarity.",
      "Restore connections, record r1, rn, r2 and R1+R2 on the schedule of test results."
    ]
  },
  {
    "id": "hvac-118",
    "title": "HVAC Run Capacitor Testing: Under-Load, Bench Test & Visual Inspection",
    "category": "HVAC",
    "subject": "Electrical Components",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-24",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/HcJL4BDJJy8",
    "isNew": false,
    "summary": "Three ways to tell whether an AC run capacitor is good, weak or failed: measuring it under load with the unit running, bench testing it with a capacitance meter, and checking it visually for bulging or leaks.",
    "safety": "Isolate and lock off the outdoor unit before touching the capacitor, discharge it safely with a resistor tool before handling, and keep hands clear of live terminals and the fan during any under-load test.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the unit at the disconnect, lock off and prove dead before opening the panel.",
      "Inspect the capacitor for bulging, oil leaks or burnt terminals and note its µF rating and tolerance.",
      "Discharge the capacitor safely, then label and remove the wires from the terminals.",
      "Bench-test each section (HERM–C and FAN–C) with a capacitance meter and compare the reading to the rated value ±tolerance.",
      "Replace any capacitor that is out of tolerance with one of the same µF and voltage rating, reconnect and confirm normal running."
    ]
  },
  {
    "id": "plumb-120",
    "title": "Installing a Water Pressure Reducing Valve (Zurn Wilkins NR3XL)",
    "category": "Plumbing",
    "subject": "Valves & Pressure Control",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "Zurn Water, LLC",
    "publishDate": "2026-10-24",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/7XpeP_cvvhg",
    "isNew": false,
    "summary": "Zurn's step-by-step installation of the Wilkins NR3XL pressure reducing valve on a water supply line, including the recommended tools and setting the outlet pressure.",
    "safety": "Isolate and drain the supply line before cutting in, relieve residual pressure through a downstream tap, and check that the system is protected against thermal expansion once the PRV is installed.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Measure the incoming static pressure with a gauge and confirm the PRV size and pressure range.",
      "Close the main isolation valve, open a downstream tap and drain the line.",
      "Install the PRV with the flow arrow in the correct direction, using unions and isolation valves on both sides.",
      "Open the supply slowly, bleed air and check every joint for leaks.",
      "Set the outlet pressure with the adjusting screw while watching a downstream gauge, then lock the adjustment and record the setting."
    ]
  },
  {
    "id": "elec-120",
    "title": "Insulation Resistance Testing on a Three-Phase Circuit",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Proactive Technical Training PTT",
    "publishDate": "2026-10-24",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/0SS4bdnnjeM",
    "isNew": false,
    "summary": "How to carry out an insulation resistance test on a 400V three-phase circuit with an insulation tester, testing between all live conductors and to earth and judging the readings against the minimum values.",
    "safety": "Safely isolate, lock off and prove the circuit dead, disconnect or protect sensitive equipment and surge devices before applying the test voltage, and discharge the circuit after each test.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Arc-Rated Clothing",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the three-phase circuit, lock off and prove dead at the point of work.",
      "Disconnect or isolate loads, electronic equipment and SPDs that could be damaged or affect the reading.",
      "Set the insulation tester to 500V DC and test L1–L2, L2–L3, L1–L3 and each line to neutral.",
      "Test all line conductors and neutral to earth (CPC) and confirm every reading is above the minimum (≥1 MΩ).",
      "Discharge the circuit, reconnect equipment and record the lowest readings on the test schedule."
    ]
  },
  {
    "id": "hvac-119",
    "title": "Why Measure Both Superheat and Subcooling When Checking a TXV System's Charge",
    "category": "HVAC",
    "subject": "Refrigerant & Diagnostics",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-25",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/ADVMXANhoz4",
    "isNew": false,
    "summary": "Explains why a single-speed AC with a TXV is charged by subcooling but total superheat must also be checked to confirm the system is operating correctly and no other fault is hiding.",
    "safety": "Only EPA/608-certified (or locally licensed) technicians should connect gauges; wear eye and hand protection against refrigerant burns and keep clear of rotating fans and live terminals in the condenser.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Resistant Gloves",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Run the system at least 15 minutes with clean filters and correct indoor airflow before taking readings.",
      "Connect gauges or probes and clamp temperature sensors on the liquid line and suction line near the service valves.",
      "Calculate subcooling (liquid saturation temp minus liquid line temp) and compare with the nameplate target.",
      "Calculate total superheat (suction line temp minus suction saturation temp) and confirm it is in the normal TXV range.",
      "Adjust charge only if both readings agree, then remove gauges, cap the ports and record the readings."
    ]
  },
  {
    "id": "plumb-121",
    "title": "Operating & Commissioning a Grundfos CME Booster Pump",
    "category": "Plumbing",
    "subject": "Pumps",
    "level": "Advanced",
    "source": "Manufacturer Tech Academy",
    "channel": "Grundfos",
    "publishDate": "2026-10-25",
    "duration": "9:24",
    "embedUrl": "https://www.youtube.com/embed/geckSyt5LKs",
    "isNew": false,
    "summary": "A Grundfos service specialist shows how to commission and operate a CME booster pump, including setting pressure, start/stop, sensor errors, dry-running protection, tank precharge and servicing.",
    "safety": "Isolate and lock off the pump's electrical supply and close the isolating valves before opening the pump or tank, and release system pressure fully before removing sensors or fittings.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Safety Shoes",
      "Insulated Gloves (electrical checks)"
    ],
    "steps": [
      "Check the pump is primed and suction/discharge valves are open, and confirm the supply voltage matches the nameplate.",
      "Check and set the pressure tank precharge with the system drained (typically about 0.9 × pump setpoint).",
      "Power up, set the required pressure setpoint on the control panel and start the pump.",
      "Open outlets to confirm the pump starts, holds pressure and stops on no-flow; check for sensor or dry-run alarms.",
      "Clear any fault codes, record setpoint and precharge, and schedule servicing per the manufacturer's manual."
    ]
  },
  {
    "id": "elec-121",
    "title": "Electrical Safe Isolation Procedure – Single Phase",
    "category": "Electrical",
    "subject": "Safety & Isolation",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Residual Electrical",
    "publishDate": "2026-10-25",
    "duration": "8:00",
    "embedUrl": "https://www.youtube.com/embed/opHtgbcicTk",
    "isNew": false,
    "summary": "Walks through a complete safe isolation procedure on a 230V single-phase installation: identify the circuit, isolate, lock off, prove the tester, test dead and re-prove the tester.",
    "safety": "Never work on a circuit until it is isolated, locked off with your own lock and key, and proven dead with a GS38-compliant approved voltage indicator checked on a proving unit before and after the test.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Identify the correct circuit and get permission to isolate it from the person in control of the premises.",
      "Switch off the MCB/RCBO or isolator, fit a lock-off device with your personal padlock and a warning tag.",
      "Prove the approved voltage indicator works on a proving unit or known live source.",
      "Test between all conductors (L–N, L–E, N–E) at the point of work to confirm the circuit is dead.",
      "Re-prove the voltage indicator on the proving unit, then start work keeping the key with you."
    ]
  },
  {
    "id": "hvac-120",
    "title": "Troubleshooting an AC Condenser Fan Motor: Supply Voltage, Capacitor, Contactor & Windings",
    "category": "HVAC",
    "subject": "Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Fox Family Heating and Air Conditioning",
    "publishDate": "2026-10-26",
    "duration": "5:18",
    "embedUrl": "https://www.youtube.com/embed/OMRExEe2aM8",
    "isNew": false,
    "summary": "A technician diagnoses a failed condenser fan motor by checking supply voltage at the motor, the run capacitor and the contactor, then testing the motor windings with an ohmmeter, with real cases of debris and moisture damage.",
    "safety": "Isolate and lock off the outdoor unit disconnect, discharge the capacitor with an insulated resistor tool before touching terminals, and keep hands clear of the fan blade until it has fully stopped.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Safety Shoes"
    ],
    "steps": [
      "Confirm the call is a no-fan condition with the compressor running, then isolate, lock off and remove the top panel.",
      "Restore power briefly and measure supply voltage at the fan motor leads with the contactor pulled in.",
      "Isolate again, discharge and test the run capacitor against its rated µF, and inspect the contactor contacts.",
      "Disconnect the motor leads and measure winding resistance (common–run, common–start) and check for shorts to ground.",
      "Replace the faulty part, check the shroud and drain holes for debris and moisture entry, then run and record fan amps."
    ]
  },
  {
    "id": "plumb-122",
    "title": "How to Unclog a Toilet with a Closet Auger",
    "category": "Plumbing",
    "subject": "Drainage",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Roger Wakefield Plumbing Education",
    "publishDate": "2026-10-26",
    "duration": "4:17",
    "embedUrl": "https://www.youtube.com/embed/OSIpZzs8NRA",
    "isNew": false,
    "summary": "A master plumber explains the parts of a closet auger and demonstrates how to feed and crank it through the toilet trap to clear a stubborn blockage that a plunger cannot shift.",
    "safety": "Do not use chemical drain cleaners before augering because of splash-back burns, keep the rubber guard against the bowl to avoid scratching the porcelain, and wear gloves and eye protection against contaminated water.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses",
      "Waterproof Apron"
    ],
    "steps": [
      "Lay down absorbent pads, put on gloves and eye protection, and confirm no chemicals have been poured in the bowl.",
      "Retract the auger cable fully and seat the bent tip and rubber guard into the bowl outlet.",
      "Crank the handle clockwise while pushing the cable down to feed it through the trap.",
      "Work the cable back and forth through the blockage, then retract it slowly while still cranking.",
      "Flush test the toilet two or three times, clean and disinfect the auger, and report if the blockage is further down the line."
    ]
  },
  {
    "id": "elec-122",
    "title": "Upgrading a Split-Load Consumer Unit to RCBOs with Surge Protection",
    "category": "Electrical",
    "subject": "Distribution Boards",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Gareth Burgess",
    "publishDate": "2026-10-26",
    "duration": "18:38",
    "embedUrl": "https://www.youtube.com/embed/DF3dz0tRoHA",
    "isNew": false,
    "summary": "An electrician upgrades an existing split RCD/MCB 230V consumer unit by fitting individual RCBOs for each circuit and adding a surge protection device.",
    "safety": "Have the supply isolated at the main switch or service head, lock off and prove dead with a GS38 voltage indicator and proving unit, and complete insulation resistance, polarity and RCD tests before re-energising.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the main supply, lock off, prove dead at the board and label every circuit before disconnecting.",
      "Remove the existing RCDs and MCBs, noting circuit ratings and neutral positions for each way.",
      "Fit the RCBOs with the correct rating and curve per circuit, connecting each circuit's line, neutral and functional earth.",
      "Install the SPD with short, direct conductors to the busbar and earth bar, then torque all terminals to spec.",
      "Carry out insulation resistance and polarity tests, energise, then test each RCBO's trip time and update the circuit chart."
    ]
  },
  {
    "id": "hvac-121",
    "title": "How Air Conditioning Manifold Gauges Work for Beginners",
    "category": "HVAC",
    "subject": "Tools & Instruments",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-27",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/oBUHhBzIe-E",
    "isNew": false,
    "summary": "Explains the parts of an HVAC manifold gauge set (high, low and center ports, valves, hoses, core depressors and sight glass) and how technicians use the readings to find saturation pressures and temperatures when charging or recovering refrigerant.",
    "safety": "Wear gloves and eye protection when connecting hoses because liquid refrigerant causes frostbite, keep valve handles closed until hoses are secured, and hang the manifold clear of the condenser fan and coil.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Rated Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Inspect the manifold, hoses, seals and core depressors for damage, and zero-calibrate the gauges with hoses open to atmosphere.",
      "Confirm both manifold handles are closed, then connect the blue hose to the suction (low) port and the red hose to the liquid (high) port.",
      "Hang the manifold safely away from the condenser fan and coil and let the system run to stable conditions.",
      "Read low- and high-side pressures and convert them to saturation temperatures for the system's refrigerant.",
      "Disconnect hoses quickly to minimise refrigerant loss, refit the service caps and record the readings on the job sheet."
    ]
  },
  {
    "id": "plumb-123",
    "title": "ProPress Copper Press Fitting Installation Guide",
    "category": "Plumbing",
    "subject": "Pipe Joining",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "Viega LLC",
    "publishDate": "2026-10-27",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/FyG5_0ccx2Q",
    "isNew": false,
    "summary": "Viega walks through the step-by-step ProPress installation procedure for making flameless press connections on copper water pipe.",
    "safety": "Isolate and drain the line before cutting, keep fingers clear of the press jaws during the press cycle, and use only the jaws and tool approved for the fitting size.",
    "ppe": [
      "Safety Glasses",
      "Cut-Resistant Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Isolate the water supply, drain the section and cut the copper tube square with a tube cutter.",
      "Ream the inside and outside of the tube end and clean it to remove burrs and debris.",
      "Check the fitting's sealing element is present and undamaged, then mark the insertion depth on the tube.",
      "Insert the tube fully to the depth mark and press with the correct size jaw held square to the fitting.",
      "Inspect every press, restore the supply and pressure-test the joint, checking for leaks before handover."
    ]
  },
  {
    "id": "elec-123",
    "title": "How to Check a Three-Phase Motor System: Motor, Isolator, Overloads, Contactor & Fuses",
    "category": "Electrical",
    "subject": "Motor Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Electronic Control Services",
    "publishDate": "2026-10-27",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/ZLpBbaU-V7g",
    "isNew": false,
    "summary": "An instructor shows how to troubleshoot a three-phase motor system by checking each component in sequence: the motor, its isolator/disconnect, overload protection, contactor and fuses.",
    "safety": "Live diagnostic voltage checks on 400V three-phase must be done only by authorised electricians with CAT III/IV rated meters and GS38 leads; isolate, lock off and prove dead before any resistance or continuity test.",
    "ppe": [
      "Arc-Rated Face Shield",
      "Insulated Gloves",
      "Arc-Rated Clothing",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Measure line-to-line and line-to-earth supply voltage at the isolator and compare all three phases for loss or unbalance.",
      "Isolate, lock off and prove dead, then check each fuse for continuity and correct rating.",
      "Inspect contactor contacts for pitting and check the coil voltage and operation.",
      "Verify the overload relay setting matches motor FLC and test its contacts for continuity.",
      "Test motor winding resistance phase-to-phase and insulation resistance to earth, then restore and measure running current per phase."
    ]
  },
  {
    "id": "hvac-122",
    "title": "Full Refrigerant Pump-Down Procedure on an AC Unit",
    "category": "HVAC",
    "subject": "Refrigerant Handling",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-10-28",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/xkQ6cxkaps4",
    "isNew": false,
    "summary": "A technician performs a complete pump-down, moving the refrigerant charge into the outdoor unit so the line set or indoor section can be serviced, and explains when pump-down is and isn't appropriate.",
    "safety": "Never let suction pressure fall into a deep vacuum or run the compressor against a closed liquid valve for long, never bypass pressure switches unattended, and wear gloves and eye protection against refrigerant frostbite.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Rated Gloves",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Connect a purged manifold gauge set to the suction service port and confirm the system is running normally.",
      "Front-seat (close) the liquid line service valve while the compressor runs.",
      "Watch suction pressure fall and stop the compressor at just above 0 psig — do not pull into a vacuum.",
      "Immediately front-seat the suction service valve and isolate power to the outdoor unit.",
      "Confirm pressure holds steady on the isolated section before opening it, then record the work."
    ]
  },
  {
    "id": "plumb-124",
    "title": "Sewer Inspection Cameras & Locators Training",
    "category": "Plumbing",
    "subject": "Drain Diagnostics",
    "level": "Advanced",
    "source": "ToolTech & Equipment Pro",
    "channel": "Herc Rentals",
    "publishDate": "2026-10-28",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/d9FXqYAuctg",
    "isNew": false,
    "summary": "A Hathorn equipment trainer shows how push-rod sewer inspection cameras and 512 Hz sonde locators are used to view, record and pinpoint the location and condition of buried drain pipe.",
    "safety": "Use only properly vented access points, keep the reel on a GFCI-protected supply, never push the camera through blockages or live cutters, and disinfect the push cable after every job.",
    "ppe": [
      "Nitrile Gloves under Work Gloves",
      "Safety Glasses",
      "Safety Shoes",
      "High-Visibility Vest"
    ],
    "steps": [
      "Locate and open the cleanout or manhole, check for gases and set up barriers around the access point.",
      "Set up the reel and monitor on a GFCI supply, set footage counter to zero and start recording.",
      "Feed the camera slowly, noting distance and defects such as roots, offsets, bellies or cracks.",
      "Stop at the defect, switch on the 512 Hz sonde and use the locator to mark its position and depth on the surface.",
      "Retrieve and clean the cable, then save the video and issue a report with defect locations and recommendations."
    ]
  },
  {
    "id": "elec-124",
    "title": "How to Wire a Fused Connection Unit (FCU / Fused Spur)",
    "category": "Electrical",
    "subject": "Wiring Accessories",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Allen Goldsmith",
    "publishDate": "2026-10-28",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/aozrvL0Jt9w",
    "isNew": false,
    "summary": "A UK electrician demonstrates how to safely terminate a 13A BS 1363 fused connection unit, connecting the supply and load sides correctly and fitting the right fuse.",
    "safety": "Safely isolate, lock off and prove dead with an approved voltage indicator before removing the FCU, and fit a fuse rated for the connected appliance, never higher than 13A.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the circuit at the DB, lock off and prove dead at the FCU with a GS38 tester.",
      "Identify the supply (from the ring/radial) and load (to the appliance) cables.",
      "Strip and terminate supply L and N in the SUPPLY terminals and load L and N in the LOAD terminals.",
      "Sleeve and connect all CPCs to the earth terminal and the back box, then fit the faceplate without trapping cables.",
      "Fit the correctly rated fuse, restore power and test polarity and operation of the appliance."
    ]
  },
  {
    "id": "hvac-123",
    "title": "What Should the Air Delta T Be? Measuring AC Air Temperature Split",
    "category": "HVAC",
    "subject": "Fundamentals",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-10-30",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/_pD-rRCNv8k",
    "isNew": false,
    "summary": "Bryan Orr shows how to measure return and supply air temperatures across the evaporator coil and explains why the correct delta T depends on humidity, airflow and equipment rather than a fixed 20-degree rule.",
    "safety": "Keep hands and probes clear of the blower and moving parts, isolate power before opening any panel beyond the access port, and work from a stable ladder at high-wall or ceiling units.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Confirm the unit has run in cooling for at least 10–15 minutes with a clean filter fitted.",
      "Place a temperature probe in the return air close to the coil inlet, away from outside air leaks.",
      "Place a second probe in the supply air close to the coil outlet, out of direct line of the coil face.",
      "Record return and supply dry-bulb (and wet-bulb if available) and calculate the temperature split.",
      "Compare the result with the expected range for the indoor humidity and log it with superheat/subcooling readings on the job card."
    ]
  },
  {
    "id": "plumb-125",
    "title": "Joining PVC Pipe & Fittings with Primer and Solvent Cement",
    "category": "Plumbing",
    "subject": "Pipe Jointing",
    "level": "Intermediate",
    "source": "Manufacturer Tech Academy",
    "channel": "TChristyEnterprises",
    "publishDate": "2026-10-30",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/Zirp8vqApQc",
    "isNew": false,
    "summary": "A solvent cement manufacturer demonstrates the professional procedure for cutting, deburring, priming and solvent-welding PVC pipe and fittings for plumbing and drainage lines.",
    "safety": "Primers and solvent cements are flammable and give off strong vapours, so work in a well-ventilated area away from ignition sources, avoid skin and eye contact, and close containers when not in use.",
    "ppe": [
      "Chemical-Resistant Gloves",
      "Safety Glasses",
      "Respirator (Organic Vapour) in confined areas"
    ],
    "steps": [
      "Cut the pipe square with a PVC cutter or saw and remove burrs and filings inside and out.",
      "Dry-fit the pipe and fitting and mark the insertion depth and alignment.",
      "Apply primer to the fitting socket and pipe end to soften the surface.",
      "While the primer is still wet, apply an even coat of solvent cement to the pipe and a thinner coat in the socket.",
      "Push in fully with a quarter turn, hold for about 30 seconds, wipe excess and respect the cure time before pressure or flow testing."
    ]
  },
  {
    "id": "elec-125",
    "title": "Ze and Prospective Fault Current (PFC) Tests on a 3-Phase Distribution Board",
    "category": "Electrical",
    "subject": "Inspection & Testing",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Proactive Technical Training PTT",
    "publishDate": "2026-10-30",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/g4oOp2KFXqo",
    "isNew": false,
    "summary": "Trainer Sam Craig demonstrates live measurement of external earth fault loop impedance (Ze) and prospective fault current (PSCC/PEFC) at the origin of a three-phase 400V distribution board.",
    "safety": "These are live tests at the supply origin, so only competent, authorised electricians should carry them out using GS38-compliant leads, with the main switch isolated and the earthing conductor disconnected only while the installation is safely isolated and reconnected immediately after.",
    "ppe": [
      "Arc-Rated Face Shield / Safety Glasses",
      "Insulated Gloves (Class 0)",
      "Arc-Rated FR Clothing",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Obtain a permit, isolate the installation at the main switch and verify the loop/PFC tester and GS38 leads are in good condition.",
      "For Ze, disconnect the main earthing conductor from the MET and measure line-to-earth on the supply side of the main switch.",
      "Reconnect the earthing conductor immediately and confirm it is tight before continuing.",
      "Measure PSCC line-to-neutral and PEFC line-to-earth, and record line-to-line PFC (or double the L-N value) for the three-phase supply.",
      "Record the highest PFC and Ze on the schedule of test results and check device breaking capacities and Ze against the supplier limits."
    ]
  },
  {
    "id": "hvac-124",
    "title": "Checking Total External Static Pressure (TESP) with a Manometer",
    "category": "HVAC",
    "subject": "Airflow Testing",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AllTech Services",
    "publishDate": "2026-10-31",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/RdnevfMde6g",
    "isNew": false,
    "summary": "Shows where to drill static pressure test ports, how to connect a manometer and read total external static pressure, and what high or low readings reveal about filters, ductwork and the blower.",
    "safety": "Isolate power to the air handler before drilling test ports, keep hands and probes clear of the blower and moving parts when the unit runs, and seal every test hole with a proper plug after the test.",
    "ppe": [
      "Safety Glasses",
      "Cut-Resistant Gloves",
      "Dust Mask (when drilling)"
    ],
    "steps": [
      "Confirm the filter and coil condition, then isolate power and drill test ports in the supply and return plenums near the air handler.",
      "Zero the digital manometer and connect the hoses and static pressure tips to the supply (+) and return (-) ports.",
      "Restore power and run the blower at its normal cooling speed with all grilles and dampers in their normal position.",
      "Read total external static pressure and compare it with the rated maximum on the unit nameplate or fan table.",
      "Record the reading, investigate high values (dirty filter, restrictive duct, closed dampers) and seal all test ports with plugs."
    ]
  },
  {
    "id": "plumb-126",
    "title": "Servicing and Repairing a Thermostatic Mixing Valve (TMV / Blending Valve)",
    "category": "Plumbing",
    "subject": "Hot Water Safety Valves",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "Sebastian Hibbert",
    "publishDate": "2026-10-31",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/E97KrjY9Q4A",
    "isNew": false,
    "summary": "A plumber strips down a thermostatic mixing (blending) valve, cleans and services the internal parts and reassembles it to restore safe, stable mixed-water temperature.",
    "safety": "Isolate and drain both hot and cold supplies before opening the valve, beware of scalding stored hot water, and always re-test the mixed outlet temperature and cold-supply fail-safe before handing back to users.",
    "ppe": [
      "Safety Glasses",
      "Heat-Resistant Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Record the current mixed outlet temperature, then isolate the hot and cold supplies at the TMV service valves and open the outlet to relieve pressure.",
      "Remove the valve head or cartridge and inspect the thermostatic element, filters, seals and check valves for scale or debris.",
      "Descale and clean the strainers and cartridge, and replace worn O-rings, seals or check valves with manufacturer parts.",
      "Reassemble the valve, restore the supplies slowly and check all joints for leaks.",
      "Set the mixed outlet to the specified temperature with a calibrated thermometer, perform the cold-supply fail-safe test and record results on the TMV service log."
    ]
  },
  {
    "id": "elec-126",
    "title": "How to Fit or Change a 13 Amp BS 1363 Plug Top",
    "category": "Electrical",
    "subject": "Wiring Accessories",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-10-31",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/maFAKU1r_Jw",
    "isNew": false,
    "summary": "An apprentice-training demonstration of stripping a 3-core flexible cord and wiring it correctly into a BS 1363 13A plug top with the right BS 1362 fuse fitted.",
    "safety": "Unplug and inspect the appliance before work, never work on a live flex, select the correct BS 1362 fuse (3A, 5A or 13A) for the appliance rating, and make sure the cord grip clamps the outer sheath, not the cores.",
    "ppe": [
      "Safety Glasses",
      "Insulated Hand Tools",
      "Work Gloves"
    ],
    "steps": [
      "Disconnect the appliance from the supply, check the flex for damage and note the appliance rating to choose the BS 1362 fuse.",
      "Open the plug top and strip the outer sheath so it reaches the cord grip, then cut the cores to length for each terminal.",
      "Strip the core insulation and connect brown to L (fused), blue to N and green/yellow to E, leaving the earth core slightly longer.",
      "Tighten the terminal screws, secure the outer sheath in the cord grip and fit the correct fuse.",
      "Close the plug top, then carry out a visual check and a PAT/continuity test before returning the appliance to service."
    ]
  },
  {
    "id": "hvac-125",
    "title": "How and When to Change an AC Contactor",
    "category": "HVAC",
    "subject": "Electrical Components",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "HVAC School",
    "publishDate": "2026-11-01",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/I53nbpTHmVk",
    "isNew": false,
    "summary": "An HVAC instructor coaches an apprentice through spotting a pitted contactor during maintenance, isolating power, replacing the contactor, checking the wiring against the schematic and monitoring compressor amps on start-up.",
    "safety": "Isolate both the outdoor disconnect and the indoor unit breaker because the contactor coil is fed by control voltage from indoors, then prove dead with a tested meter before touching any terminals.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Insulated Hand Tools"
    ],
    "steps": [
      "Inspect the contactor during maintenance for pitted or burnt contacts, overheating and voltage drop across the contacts.",
      "Switch off and lock out the outdoor disconnect and the indoor breaker, then prove dead on line and coil terminals with a meter.",
      "Photograph or label the wiring, remove the old contactor and inspect conductors and spade terminals for heat damage.",
      "Mount the matching replacement contactor securely and reconnect line, load and coil wires firmly according to the unit schematic.",
      "Restore power, call for cooling and confirm the contactor pulls in cleanly while monitoring compressor current with a clamp meter."
    ]
  },
  {
    "id": "plumb-127",
    "title": "RIDGID K-400 Drum Machine: Machine and Work Area Set-Up for Drain Cleaning",
    "category": "Plumbing",
    "subject": "Drain Cleaning",
    "level": "Advanced",
    "source": "ToolTech & Equipment Pro",
    "channel": "RIDGID Tools",
    "publishDate": "2026-11-01",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/FbXT3xyDXFk",
    "isNew": false,
    "summary": "RIDGID's official guide to setting up the K-400 drum drain-cleaning machine: assessing the drain, preparing the work area, positioning the machine, selecting and fitting the cutting tool and connecting the foot switch and power safely.",
    "safety": "Wear safety glasses and RIDGID drain-cleaning gloves over liquid-barrier gloves, check the drain for chemicals first, keep the drum within 2 ft of the access point to prevent cable kinking, and plug into a grounded outlet with dry hands.",
    "ppe": [
      "Safety Glasses",
      "Drain Cleaning Gloves",
      "Nitrile/Latex Liner Gloves",
      "Safety Boots"
    ],
    "steps": [
      "Inspect the drain: find access points, pipe size and length, the nature of the blockage and whether any drain chemicals are present.",
      "Barrier off the work area, lay protective covers and remove the fixture if needed so the cable is never fed through a fixture.",
      "Position the machine with the drum opening within 2 ft of the drain access, extending the access with pipe if necessary.",
      "Select the right cutter (start with a straight or bulb auger if the blockage is unknown) and snap it into the coupler, checking the retaining plunger.",
      "Place the foot switch within reach, confirm the FOR/OFF/REV switch is OFF, then plug into a grounded outlet with dry hands before starting."
    ]
  },
  {
    "id": "elec-127",
    "title": "UK Lighting Circuits Part 1: Basic Concepts, Ceiling Rose and Light Switch Connections",
    "category": "Electrical",
    "subject": "Lighting Circuits",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "John Ward (jwflame)",
    "publishDate": "2026-11-01",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/dnpV781c6Sw",
    "isNew": false,
    "summary": "Explains the basics of UK (BS 7671, 230V) lighting circuits, including the permanent line, neutral, switch line and CPC, and how they connect at a loop-in ceiling rose and a one-way light switch.",
    "safety": "Isolate and lock off the lighting MCB, prove dead with an approved voltage indicator and proving unit, and sleeve the blue switch-line conductor brown because it is a line conductor, not a neutral.",
    "ppe": [
      "Safety Glasses",
      "Insulated Screwdrivers",
      "Voltage Indicator & Proving Unit"
    ],
    "steps": [
      "Isolate the lighting circuit at the distribution board, lock off and prove dead at the ceiling rose and switch.",
      "Identify the conductors at the loop-in rose: permanent line in/out, neutrals, the switch drop and the CPCs.",
      "Connect the permanent line to the switch common (COM) and the returning switch line to L1, sleeving it brown at both ends.",
      "Terminate the pendant flex neutral and switch line at the rose and sleeve all CPCs green/yellow into the earth terminal.",
      "Refit the covers, restore power and check the switch operates the lamp, then record continuity and polarity tests."
    ]
  },
  {
    "id": "hvac-126",
    "title": "Testing if a Compressor is Shorted to Ground, Open, or Overload Tripped",
    "category": "HVAC",
    "subject": "Electrical Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-02",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/EvzwyDl4Fgg",
    "isNew": false,
    "summary": "Shows how to measure resistance across single-phase and 3-phase compressor terminals to find windings shorted to ground, open windings, a tripped internal overload or a bad connection, and shows the inside of a burned-out compressor.",
    "safety": "Lock off the disconnect, prove no voltage at the contactor and discharge the capacitor before touching the terminals, wait for inverter DC capacitors to discharge, and treat a burned-out compressor as acid-contaminated.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Lockout/Tagout Kit",
      "Multimeter (Ohms)"
    ],
    "steps": [
      "Confirm no voltage at the contactor, isolate at the disconnect and lock off.",
      "Photograph or label the wires, then disconnect the compressor leads from the contactor and the capacitor Herm tab.",
      "Measure ohms across all three terminal pairs: common-to-run is lowest, common-to-start is middle, start-to-run is highest; on a 3-phase compressor all three should match.",
      "If a pair reads OL, let the compressor cool and retest; a reading that stays OL points to open windings, not a tripped internal overload.",
      "Measure from clean copper tube to each lead and terminal: anything other than OL means a short to ground, so condemn the compressor and check for burnout."
    ]
  },
  {
    "id": "plumb-128",
    "title": "How to Easily Maintain a Fluidmaster Toilet Fill Valve",
    "category": "Plumbing",
    "subject": "Toilets & Flushing",
    "level": "Beginner",
    "source": "Manufacturer Tech Academy",
    "channel": "Fluidmaster",
    "publishDate": "2026-11-02",
    "duration": "2:22",
    "embedUrl": "https://www.youtube.com/embed/AabLItDN-qk",
    "isNew": false,
    "summary": "Fluidmaster shows how to inspect a toilet fill valve for wear, clean off mineral build-up, flush debris from the valve seat and replace worn parts on schedule.",
    "safety": "Shut off the toilet supply valve before opening the fill valve, check the connector for leaks afterwards, and do not use bleach or chlorine in-tank tablets, which damage tank parts and can cause flooding.",
    "ppe": [
      "Nitrile Gloves",
      "Safety Glasses",
      "Non-Slip Footwear"
    ],
    "steps": [
      "Inspect the fill valve: replace it if the body is bleached or faded, or if there is rust above the water line or on the cap lever arm.",
      "Check the water supply connector for leaks and replace it if worn or more than 5 years old.",
      "Clean mineral build-up with vinegar and an old toothbrush, then wash with warm soapy water and rinse.",
      "If the valve will not shut off, remove the cap, hold an inverted cup over the valve body, run the water 3-4 seconds twice to flush debris, then clean and refit the seal and cap.",
      "Replace the top cap assembly and the refill tube and clip every 5 years, then restore water and confirm the valve fills and shuts off."
    ]
  },
  {
    "id": "elec-128",
    "title": "How to Strip a Steel Wire Armoured (SWA) Cable and Fit a Gland",
    "category": "Electrical",
    "subject": "Wiring Accessories",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Trade Skills 4U",
    "publishDate": "2026-11-02",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/Qep-3PY_pQM",
    "isNew": false,
    "summary": "A Trade Skills 4U tutor demonstrates how to size up, strip and fit a gland to a steel wire armoured (SWA) cable.",
    "safety": "Work only on a cable that is isolated, locked off and proved dead, wear gloves against sharp cut armour wires, and make sure the gland earths the armour to the 230/400V installation's earthing system.",
    "ppe": [
      "Safety Glasses",
      "Cut-Resistant Gloves",
      "Voltage Indicator & Proving Unit"
    ],
    "steps": [
      "Isolate and lock off the circuit and prove the cable dead before any cutting.",
      "Offer the gland up to the enclosure and mark the cable for the outer sheath and armour strip lengths.",
      "Score and remove the outer sheath without nicking the armour wires, then cut the armour to length.",
      "Slide on the shroud and gland, spread the armour evenly over the cone and tighten the gland so the armour is clamped firmly.",
      "Fit the gland to the enclosure with its earth tag, connect the core conductors, then test continuity of the armour and insulation resistance before energising."
    ]
  },
  {
    "id": "hvac-127",
    "title": "Reading AC Rating Plates: Size, Refrigerant, Pressure & Electrical Data",
    "category": "HVAC",
    "subject": "Fundamentals",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-03",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/4dkY0zs7sBQ",
    "isNew": false,
    "summary": "Craig Migliaccio walks through the outdoor unit and indoor coil rating plates, covering capacity, refrigerant charge, target subcooling, RLA, LRA, FLA, design pressures and maximum fuse and breaker size.",
    "safety": "Read plates with the unit isolated if panels must be removed, confirm the plate voltage and frequency match the local 230/400V 50Hz supply as the video shows a US 60Hz unit, and never pressure test above the lowest maximum design pressure of the indoor coil.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Locate the outdoor unit plate and read the model number to find the capacity in thousands of BTU/hr, with 12,000 BTU/hr equal to one ton.",
      "Note the refrigerant type, factory charge and target subcooling before connecting any gauges.",
      "Check the supply voltage, phase and frequency against the plate, then record compressor RLA and LRA and fan motor FLA.",
      "Confirm the minimum circuit amps and maximum fuse or breaker size against the installed cable and protective device.",
      "Read the indoor coil plate, confirm its capacity, refrigerant and metering device match the outdoor unit, and use its lower maximum design pressure as the pressure test limit."
    ]
  },
  {
    "id": "plumb-129",
    "title": "How Compression Fittings Work: Joining Copper Pipe and MLCP",
    "category": "Plumbing",
    "subject": "Pipe Joining",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Allen Hart",
    "publishDate": "2026-11-03",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/yvTEb2-Iivo",
    "isNew": false,
    "summary": "A trainee-level tutorial showing how the tapered seat, olive and nut seal a compression joint on copper pipe, with a short section on MLCP fittings.",
    "safety": "Isolate and drain the line before cutting, wear eye protection and gloves against sharp pipe ends and burrs, and pressure check the finished joint before leaving site because an overtightened olive can leak.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Safety Shoes"
    ],
    "steps": [
      "Isolate the water supply, drain the section and cut the pipe square.",
      "Deburr the pipe end and clean it so the olive can seat on a smooth surface.",
      "Slide on the nut and olive, then insert the pipe fully and squarely into the fitting body.",
      "Tighten the nut by hand and then slightly past snug with spanners, without using PTFE tape on the thread and without overtightening and squashing the olive.",
      "Restore the water, check the joint for weeps and nip up only slightly if needed."
    ]
  },
  {
    "id": "elec-129",
    "title": "Tracing Nuisance RCD Tripping with Earth Leakage & Insulation Resistance Tests",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "David Savery Electrical Services",
    "publishDate": "2026-11-03",
    "duration": "14:28",
    "embedUrl": "https://www.youtube.com/embed/s8ALrG8TU5w",
    "isNew": false,
    "summary": "A UK electrician traces an intermittent RCD trip on a split-load board using earth leakage clamp readings, an RCD ramp test and circuit-by-circuit insulation resistance tests, finding a faulty dishwasher.",
    "safety": "Safely isolate, lock off and prove dead before disconnecting neutrals or insulation testing at 500V, unplug appliances and surge-protected strips first, and treat earth leakage clamp readings as live work for competent persons only.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Voltage Indicator & Proving Unit",
      "Lockout/Tagout Kit"
    ],
    "steps": [
      "Clamp the tails to measure earth leakage on the non-RCD side, then the RCD side, to find the leakage on the RCD-protected circuits.",
      "Ramp test the RCD to find its actual trip current and work out how much extra leakage will trip it.",
      "Isolate the board, disconnect each circuit neutral and insulation test at 500V between line and neutral joined together and earth, investigating anything below 2 megohms.",
      "Remove plug-in loads and open double-pole switches, retest, then reconnect appliances one at a time to find the one lowering the reading.",
      "Calculate the combined parallel insulation resistance of the RCD circuits, take the faulty appliance out of service, and retest and record the results."
    ]
  },
  {
    "id": "hvac-128",
    "title": "When to Replace a Filter Drier and How to Braze In a New One",
    "category": "HVAC",
    "subject": "Refrigerant Circuit Repair",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "HVAC Technical Academy",
    "publishDate": "2026-11-04",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/Pv6MXHsuZl4",
    "isNew": false,
    "summary": "An HVAC instructor shows how to confirm a failed filter drier from gauge readings and the temperature drop across it, then removes the old drier and brazes in a new one.",
    "safety": "Isolate and lock off the unit, recover the refrigerant with certified equipment before opening the circuit, purge with dry nitrogen while brazing, and keep a fire extinguisher and heat shield at the brazing point.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Rated Gloves",
      "Brazing Gloves & Shade Goggles",
      "Fire Extinguisher"
    ],
    "steps": [
      "Connect the manifold gauges and measure the temperature on both sides of the drier; a noticeable drop across it points to a restriction.",
      "Confirm a replacement is needed: restriction, physical damage, or a compressor changeout.",
      "Isolate the power, recover the refrigerant, and cut out the old drier.",
      "Fit the new drier with its flow arrow in the refrigerant direction, shield it from heat, and braze the joints with a nitrogen purge.",
      "Pressure test with nitrogen, evacuate, recharge to specification, and recheck the temperature across the drier."
    ]
  },
  {
    "id": "plumb-130",
    "title": "Sewage Pump Troubleshooting in the Field: Pump or Float Switch Fault?",
    "category": "Plumbing",
    "subject": "Sewage Pumps & Controls",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "R.C. Worst & Co., Inc.",
    "publishDate": "2026-11-04",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/ERSf9dOakok",
    "isNew": false,
    "summary": "A pump specialist responds to a failed sewage pump call and works through the field checks that show whether the pump or the float switch is at fault.",
    "safety": "Lock off the pump supply before handling floats or wiring, treat the pit as a confined space with possible sewer gas, stay out of the pit unless gas tested and authorised, and wash thoroughly after any sewage contact.",
    "ppe": [
      "Waterproof Chemical-Resistant Gloves",
      "Face Shield or Safety Goggles",
      "Rubber Boots",
      "Portable Gas Monitor"
    ],
    "steps": [
      "Confirm the fault with the site team, including any alarm, and check the pit level from outside the pit.",
      "Check the supply at the panel or pump connection with a multimeter, then isolate and lock off.",
      "Inspect the float for snagging, debris, or cable damage and check that it moves freely.",
      "Test the float switch for continuity through its raised and lowered positions, then test the pump separately to identify the faulty part.",
      "Replace the faulty float or pump, reset the float levels, restore power, and run a full fill-and-pump-down cycle to confirm correct operation."
    ]
  },
  {
    "id": "elec-130",
    "title": "UK Ring Circuits for Socket Outlets Explained",
    "category": "Electrical",
    "subject": "Final Circuits",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "John Ward (jwflame)",
    "publishDate": "2026-11-04",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/hZN6hiGLtrE",
    "isNew": false,
    "summary": "An experienced UK electrical presenter explains how ring circuits, formerly called ring mains, supply BS 1363 socket outlets.",
    "safety": "Treat every socket circuit as live until it is safely isolated, locked off and proved dead with an approved voltage indicator, and leave circuit changes to a competent electrician.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Voltage Indicator & Proving Unit",
      "Lockout/Tagout Kit"
    ],
    "steps": [
      "Identify the socket circuit at the distribution board and note its protective device and rating.",
      "Safely isolate the circuit, lock it off and prove dead at the outlet before removing the faceplate.",
      "Identify the two sets of line, neutral and earth conductors that indicate a ring connection at the socket.",
      "Report any socket that does not match the expected layout, such as a broken ring or an unapproved spur, for testing by a competent electrician.",
      "Refit the faceplate, remove the lock, re-energise the circuit and confirm correct operation with a socket tester."
    ]
  },
  {
    "id": "hvac-129",
    "title": "LEV/EEV Electric Expansion Valve Operation and Troubleshooting for VRF Units",
    "category": "HVAC",
    "subject": "VRF Systems",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-05",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/B_j73X0gxC0",
    "isNew": false,
    "summary": "A cut-open linear expansion valve shows the pin, gearing and wiring of the electric metering device used in VRF and mini-VRF indoor units, and how electrical pulses move the pin to control refrigerant flow.",
    "safety": "Isolate, lock off and prove dead before disconnecting the valve coil, and recover the refrigerant before removing a valve head because the head is part of the sealed system; only competent, refrigerant-qualified technicians should do this work.",
    "ppe": [
      "Safety Glasses",
      "Refrigerant-Resistant Gloves",
      "Insulated Gloves",
      "Lockout/Tagout Kit"
    ],
    "steps": [
      "Identify the valve type and location, noting that VRF indoor units have an EEV or LEV at the indoor unit while most mini-splits meter at the outdoor unit.",
      "Isolate the unit, lock it off and prove dead before unplugging the valve coil connector.",
      "Identify the coil wiring and check the windings with a multimeter against the manufacturer data.",
      "With the board or test method the manufacturer allows, drive the valve and confirm the pin moves through its pulses.",
      "If the head must be replaced, recover the refrigerant first, then refit it and confirm correct superheat and valve control on restart."
    ]
  },
  {
    "id": "plumb-131",
    "title": "How to Remove and Install a Shut-Off Valve: Compression, Soldered and Push-Fit",
    "category": "Plumbing",
    "subject": "Valves & Fittings",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Got2Learn",
    "publishDate": "2026-11-05",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/OjD2UtzlX8w",
    "isNew": false,
    "summary": "Shows why a leaking shut-off valve is replaced and how to remove and fit compression, soldered and push-fit types on copper pipe.",
    "safety": "Isolate and drain the line before cutting or undoing any joint, and for soldered valves use a heat shield, keep a fire extinguisher close and obtain a hot work permit where the site requires one.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Heat-Resistant Gloves (Soldering)",
      "Closed-Toe Safety Shoes"
    ],
    "steps": [
      "Identify the valve type and connection, then isolate the supply and drain the line through the lowest open outlet.",
      "Remove the old valve by undoing the compression nut and pulling the sleeve, unsweating the solder joint, or releasing the push-fit collar.",
      "Clean the pipe end with a brush or abrasive, then ream and deburr it so the new joint seats squarely.",
      "Fit the new valve using the method for its type, marking the insertion depth with a gauge on push-fit and fitting a heat shield before soldering.",
      "Close the valve, restore the supply slowly, and check the joint for leaks with the valve both open and closed."
    ]
  },
  {
    "id": "elec-131",
    "title": "CPC Continuity and Polarity Test on a Lighting Circuit Using an R1+R2 Link",
    "category": "Electrical",
    "subject": "Testing & Inspection",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-11-05",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/5bm0-u_F8W4",
    "isNew": false,
    "summary": "Demonstrates a BS 7671 dead test on a lighting circuit, using a temporary link between line and CPC at the board and a Megger MFT to measure R1+R2 and prove polarity at each point.",
    "safety": "This is a dead test, so complete safe isolation, lock off and prove dead with an approved voltage indicator before linking conductors, and remove the temporary link before re-energising the circuit.",
    "ppe": [
      "Insulated Gloves",
      "Safety Glasses",
      "Voltage Indicator & Proving Unit",
      "Lockout/Tagout Kit"
    ],
    "steps": [
      "Safely isolate the lighting circuit, lock it off and prove dead at the board.",
      "Set the multifunction tester to low-resistance continuity and null out the lead and link resistance.",
      "Fit a temporary link between line and CPC of the circuit at the consumer unit.",
      "At each lighting point and switch, test between line and CPC, operating the switch to prove polarity and noting the readings.",
      "Remove the link, reconnect the conductors, and record the highest R1+R2 reading and the polarity tick on the test schedule."
    ]
  },
  {
    "id": "elec-132",
    "title": "Fluke Thermal Imaging for Electrical Applications",
    "category": "Electrical",
    "subject": "Thermography",
    "level": "Advanced",
    "source": "Manufacturer Tech Academy",
    "channel": "TestersAndTools",
    "publishDate": "2026-11-06",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/HDppR406W-g",
    "isNew": true,
    "summary": "A Fluke web seminar covering the basics of thermography, then the process of thermal imaging and how to interpret the results on electrical equipment.",
    "safety": "Thermal scans are done on energised equipment, so only authorised staff should open panels, keep safe approach distances and wear arc-rated PPE, and any fault found must be repaired under safe isolation and proved dead first.",
    "ppe": [
      "Arc-Rated Face Shield & Clothing",
      "Insulated Gloves",
      "Safety Glasses",
      "Safety Shoes"
    ],
    "steps": [
      "Get a permit, confirm the board is carrying normal load, and list the panels to be scanned.",
      "Open covers only if authorised, keeping safe approach distances and wearing arc-rated PPE.",
      "Set emissivity and reflected temperature on the camera, then focus on each connection, breaker and busbar.",
      "Compare similar components across phases under equal load and note any hot spots with their temperature rise.",
      "Save the images, rank the faults by severity, and schedule repairs under safe isolation, then rescan to confirm."
    ]
  },
  {
    "id": "hvac-130",
    "title": "Checking Refrigerant Charge by Superheat on a Piston (Orifice) System",
    "category": "HVAC",
    "subject": "Charging & Testing",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-07",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/q-G7FLlzhAg",
    "isNew": true,
    "summary": "Shows how to tell a piston/orifice metering system from a TXV system and how to check the charge by superheat using a gauge set, temperature probe and charging chart.",
    "safety": "Isolate power before opening any cover and handle refrigerant only with proper recovery equipment; never vent refrigerant to atmosphere.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Long Sleeves"
    ],
    "steps": [
      "Confirm the metering device by removing the evaporator cover if needed and identifying a piston/orifice or TXV.",
      "For a piston/orifice system, connect the blue low-side gauge and clamp the temperature probe to the suction line.",
      "Record outdoor and indoor conditions and find the target superheat on the superheat charging chart.",
      "Compare measured superheat with the target and adjust the charge slowly, allowing the system to stabilise.",
      "Record final readings on the job sheet and confirm superheat falls within the rated band."
    ]
  },
  {
    "id": "plumb-132",
    "title": "Troubleshooting a Zurn Wilkins 975XL2 Reduced Pressure Backflow Preventer",
    "category": "Plumbing",
    "subject": "Backflow Prevention",
    "level": "Advanced",
    "source": "Manufacturer Tech Academy",
    "channel": "Zurn Water, LLC",
    "publishDate": "2026-11-07",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/vMUEJWukMeY",
    "isNew": true,
    "summary": "Shows how to diagnose a leaking Zurn Wilkins 975XL2 reduced-pressure assembly by closing shut-off valves and using test cock #4 to isolate check valve #1 or #2.",
    "safety": "Only certified backflow testers should work on the assembly; close shut-off valves and relieve pressure before opening any part, and follow local water-authority rules.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves",
      "Waterproof Clothing"
    ],
    "steps": [
      "Note where water discharges from the relief valve vent and whether it is spitting, dripping or continuous.",
      "Close shut-off valve #2 and check whether the vent discharge stops or reduces, which points to check valve #2.",
      "If discharge continues, slowly open test cock #4 to match the flow and watch whether the vent stops, which points to check valve #1.",
      "Isolate the faulty check valve, relieve pressure and open the cover following the manufacturer procedure.",
      "Replace worn check valve parts, reassemble and retest the assembly under the local certified test procedure."
    ]
  },
  {
    "id": "elec-133",
    "title": "How to Use Non-Contact Voltage Detectors",
    "category": "Electrical",
    "subject": "Test Instruments & Safe Isolation",
    "level": "Beginner",
    "source": "ToolTech & Equipment Pro",
    "channel": "Fluke Corporation",
    "publishDate": "2026-11-07",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/c-KiGsVvt2E",
    "isNew": true,
    "summary": "Introduces Fluke non-contact voltage detectors (VoltAlert range) and shows how to use the tip to detect live voltage at outlets, terminal strips and supply cords.",
    "safety": "Prove the detector on a known live source before and after use, and never rely on a non-contact tester alone to confirm a circuit is dead.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves"
    ],
    "steps": [
      "Check the detector rating and battery, then select the model suited to the supply (AC 90–1000 V or 20–90 V).",
      "Prove the detector on a known live outlet to confirm it glows and beeps before testing.",
      "Touch the tip to the terminal strip, outlet or supply cord, acting as the ground reference through capacitive coupling.",
      "Confirm the tip glows red and the unit beeps to show voltage is present, then isolate the supply.",
      "Re-prove the detector on the known live source after testing to confirm it still works."
    ]
  },
  {
    "id": "hvac-131",
    "title": "Heat Pump Troubleshooting: Testing a Defrost Board to Force Defrost",
    "category": "HVAC",
    "subject": "Controls & Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-08",
    "duration": "4:28",
    "embedUrl": "https://www.youtube.com/embed/5c5R3uYSy5U",
    "isNew": true,
    "summary": "Shows how a heat pump defrost board reads its coil (DFT) sensor and timer, how to jumper the sensor and use the speed-up terminals to force a defrost cycle, and how to return the unit to heat mode afterwards.",
    "safety": "Work on the defrost board and sensor only with power isolated; re-energise only when the sensor and speed-up jumpers are removed and the board is back in its normal wiring.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Work Boots"
    ],
    "steps": [
      "Confirm the unit is in heat mode and note the defrost timer setting (30, 60, 90 or 120 minutes).",
      "Isolate power, then disconnect the defrost temperature sensor and jumper it closed with alligator clips.",
      "Briefly bridge the speed-up terminals on the board to shorten the timer and force a defrost cycle.",
      "Check the reversing valve has switched, the outdoor fan has stopped and the coil is melting ice, then remove the jumper to end defrost.",
      "Remove all test jumpers, reconnect the sensor and confirm the unit returns to heat mode with the fan running."
    ]
  },
  {
    "id": "hvac-132",
    "title": "Liquid Line Restriction on AC Unit Explained: Found a Bad TXV",
    "category": "HVAC",
    "subject": "Controls & Diagnostics",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-11",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/_yLMv7T2hhM",
    "isNew": true,
    "summary": "Shows how a liquid line restriction appears on the gauges and subcooling readings, and how a faulty TXV can cause it.",
    "safety": "Gauge work is on pressurised refrigerant; wear eye protection and gloves, and never open a line or vent refrigerant to the air.",
    "ppe": [
      "Safety Glasses",
      "Work Gloves"
    ],
    "steps": [
      "Confirm the system is running and stable before taking any readings.",
      "Connect the gauge set and record high-side and low-side pressures.",
      "Measure liquid line temperature and calculate subcooling.",
      "Compare the readings with a liquid line restriction against low airflow or low charge.",
      "Report the findings and recommend the TXV or restriction repair to your supervisor."
    ]
  },
  {
    "id": "plumb-133",
    "title": "How to Solder Copper Pipe The Correct Way",
    "category": "Plumbing",
    "subject": "Soldering & Joining",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "Got2Learn",
    "publishDate": "2026-11-11",
    "duration": "5:04",
    "embedUrl": "https://www.youtube.com/embed/JyVbjDsric4",
    "isNew": true,
    "summary": "Covers the three stages of a copper soldered joint: cleaning and preparation, flux and heating from the bottom, and finishing with wiping excess flux.",
    "safety": "Torch flame and hot copper cause burns and fire; keep the torch away from combustibles, never heat a joint that is closed to a pressurised line, and let joints cool before touching.",
    "ppe": [
      "Safety Glasses",
      "Heat-Resistant Gloves",
      "Fire Extinguisher Nearby"
    ],
    "steps": [
      "Clean the pipe end with emery cloth and the fitting with a wire brush until bright.",
      "Apply an even coat of flux to both the pipe and the inside of the fitting.",
      "Heat the joint from the bottom and work upward, testing with solder until it wicks in.",
      "Run a full bead of solder around the joint and check for complete coverage.",
      "Let the joint cool naturally, then wipe off excess flux with a rag."
    ]
  },
  {
    "id": "elec-134",
    "title": "Ring Final Circuit Test Sequence for Electrical Apprentices",
    "category": "Electrical",
    "subject": "Inspection & Testing",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "Electricians Life UK",
    "publishDate": "2026-11-11",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/IH8DBJTN9yY",
    "isNew": true,
    "summary": "Walks apprentices through the ring final circuit test sequence, showing the continuity and resistance checks in the order they are performed.",
    "safety": "Isolate and prove the circuit dead before testing and only use a calibrated instrument; test leads must be in good condition.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Insulated Tools"
    ],
    "steps": [
      "Isolate the circuit and prove it dead with a tested voltage indicator.",
      "Identify the ring conductors and disconnect them at the consumer unit for the continuity test.",
      "Cross-connect the line and circuit protective conductor ends and measure r1, rn and r2 at each socket.",
      "Record each reading against the expected values and compare the phase and neutral readings for equality.",
      "Reconnect the circuit, complete the test certificate and confirm with your supervisor before energising."
    ]
  },
  {
    "id": "hvac-133",
    "title": "Top 5 HVAC Contactor Problems and How to Test Them",
    "category": "HVAC",
    "subject": "Electrical Components",
    "level": "Intermediate",
    "source": "YouTube / Field Guild",
    "channel": "AC Service Tech LLC",
    "publishDate": "2026-11-13",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/IdWBqHEaSPM",
    "isNew": true,
    "summary": "Explains the five most common HVAC contactor failures, such as contacts welded closed or pitted with high resistance, and how to check each with a multimeter in resistance mode.",
    "safety": "Isolate line voltage and prove dead before handling the contactor, take resistance readings only on de-energised contacts, and keep hands clear of the contacts when the 24 V coil is energised.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Insulated Safety Shoes"
    ],
    "steps": [
      "Isolate the unit at the disconnect, prove there is no voltage, and identify whether the contactor is single, two or three pole with its coil voltage and FLA rating.",
      "Set the multimeter to resistance and check the contacts with the coil unpowered; a reading near 0 ohms means the contacts are stuck closed and welded.",
      "Energise the 24 V coil from the transformer and check the contacts again; a high reading in megaohms means pitted or non-making contacts.",
      "Inspect the coil and contacts for burn marks or discolouration, and check that the coil is not shorted or open.",
      "Replace the contactor with a matching coil voltage and FLA rating if the contacts are welded, pitted or the coil is burnt, then recheck operation."
    ]
  },
  {
    "id": "plumb-134",
    "title": "Testing the RP / RPZ Backflow Preventer with a Two-Valve Test Kit (USC 10th Edition)",
    "category": "Plumbing",
    "subject": "Backflow Testing",
    "level": "Advanced",
    "source": "YouTube / Field Guild",
    "channel": "What is Backflow",
    "publishDate": "2026-11-13",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/6XZEF2ALkmo",
    "isNew": true,
    "summary": "Walks through the USC 10th Edition field test of an RP assembly with a two-valve kit, covering static line pressure, relief valve opening point and check valve tightness.",
    "safety": "Discharge from the relief port can be under pressure and the assembly must be isolated before testing; open test cocks slowly so the relief valve is not jumped, and only a certified backflow tester should perform the test.",
    "ppe": [
      "Safety Glasses",
      "Waterproof Gloves",
      "Splash-Resistant Clothing"
    ],
    "steps": [
      "Notify and identify the assembly, inspect it, then flush the test cocks with all four open and then closed in sequence.",
      "Connect the high hose to test cock 2 and the low hose to test cock 3, opening test cocks slowly so the relief valve is not jumped.",
      "Record the static line pressure, then loop the bypass and open the low bleed to find the relief valve opening point at a fine drip.",
      "Reset the gauge by bleeding up to the apparent point, then test check valve 2 for tightness against back pressure.",
      "Test check valve 1 last, confirm the shut-off valves are not leaking, record results against the USC 10th Edition criteria and restore the assembly to service."
    ]
  },
  {
    "id": "elec-135",
    "title": "Safe Isolation of a UK Consumer Unit with Lock-Off and GS38 Proving",
    "category": "Electrical",
    "subject": "Safe Isolation",
    "level": "Beginner",
    "source": "YouTube / Field Guild",
    "channel": "GSH Electrical",
    "publishDate": "2026-11-13",
    "duration": "N/A",
    "embedUrl": "https://www.youtube.com/embed/aMWNgwQeQ8g",
    "isNew": true,
    "summary": "Demonstrates safe isolation of a UK consumer unit: switching off and locking off the supply, then proving dead with a GS38 voltage indicator proved before and after the test.",
    "safety": "Never rely on a non-contact tester or multimeter to prove dead; prove the voltage indicator on a known source before and after, and lock off the supply so it cannot be re-energised.",
    "ppe": [
      "Safety Glasses",
      "Insulated Gloves",
      "Insulated Footwear"
    ],
    "steps": [
      "Obtain permission to isolate, then switch off the circuit and the main switch before removing the consumer unit cover.",
      "Fit a lock-off device and padlock to the supply, keep the key on you, and attach a warning sign.",
      "Prove the GS38 voltage indicator on a known source, then test line to neutral, line to earth and neutral to earth at the unit.",
      "Re-prove the indicator on the known source to confirm it still works and the dead reading is valid.",
      "Begin work only once the circuit is proven dead, and leave the lock-off in place until the job is finished."
    ]
  }
];
