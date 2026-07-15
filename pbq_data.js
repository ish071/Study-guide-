const PBQ_BANK = [
  {
    type: "order",
    title: "Laser Printer Imaging Process",
    prompt: "Arrange the laser printer imaging process in the correct order.",
    items: ["Processing", "Charging", "Exposing", "Developing", "Transferring", "Fusing", "Cleaning"],
    explanation: "Processing rasterizes the print job; Charging applies a uniform charge to the drum; Exposing uses a laser to selectively discharge the drum, writing the image; Developing lets toner cling to the discharged areas; Transferring moves the toner onto the paper; Fusing melts and bonds it permanently with heat and pressure; Cleaning removes leftover toner from the drum for the next cycle."
  },
  {
    type: "order",
    title: "CompTIA Six-Step Troubleshooting Methodology",
    prompt: "Arrange CompTIA's six-step troubleshooting methodology in the correct order.",
    items: [
      "Identify the problem",
      "Establish a theory of probable cause",
      "Test the theory to determine cause",
      "Establish a plan of action and implement the solution",
      "Verify full system functionality and implement preventive measures",
      "Document findings, actions, and outcomes"
    ],
    explanation: "Start by gathering information and identifying the problem, then form a theory of probable cause (starting with the most obvious). Test that theory before acting on it. Once confirmed, plan and implement a fix. Afterward, verify the fix actually resolved the issue and take steps to prevent recurrence. Finally, document everything for future reference."
  },
  {
    type: "order",
    title: "PC Boot Process",
    prompt: "Arrange the steps of a PC's boot process in the correct order.",
    items: [
      "Power supply sends a power-good signal",
      "CPU begins executing BIOS/UEFI firmware",
      "POST (Power-On Self-Test) runs",
      "Boot device is located per the configured boot order",
      "Bootloader loads the operating system kernel",
      "OS initializes drivers/services and loads the login screen"
    ],
    explanation: "The PSU must confirm stable power before the system continues. The CPU then starts executing firmware (BIOS/UEFI), which runs POST to check core hardware. The firmware locates a valid boot device based on boot order, hands off to the bootloader to load the OS kernel, and finally the OS initializes its drivers and services before presenting the login screen."
  },
  {
    type: "order",
    title: "Malware Removal Best Practices",
    prompt: "Arrange CompTIA's recommended malware removal steps in the correct order.",
    items: [
      "Investigate and verify malware symptoms",
      "Quarantine infected systems",
      "Disable System Restore (Windows)",
      "Remediate infected systems (update anti-malware, then scan and remove)",
      "Schedule scans and run updates",
      "Enable System Restore and create a restore point (Windows)",
      "Educate the end user"
    ],
    explanation: "First confirm the system is actually infected. Quarantine it to prevent spread. Disable System Restore so the malware can't hide in a restore point. Update anti-malware definitions, then scan and remove the infection. Schedule ongoing scans/updates going forward. Re-enable System Restore and create a clean restore point. Finally, educate the user on how the infection likely happened to prevent a repeat."
  },
  {
    type: "order",
    title: "Installing a New Internal Hard Drive",
    prompt: "Arrange the steps for setting up a brand-new internal hard drive in the correct order.",
    items: [
      "Physically install and connect the drive",
      "Initialize the disk in Disk Management",
      "Create a new partition/volume",
      "Format the volume with a file system",
      "Assign a drive letter or mount point"
    ],
    explanation: "After physically mounting the drive and connecting data/power cables, the OS needs the disk initialized before it can be used. A partition (volume) is then created within that disk space, formatted with a file system (like NTFS), and finally assigned a drive letter or mount point so it's accessible in the OS."
  },
  {
    type: "match",
    title: "Cable & Connector Uses",
    prompt: "Match each cable/connector to its primary real-world use.",
    pairs: [
      ["RJ-45", "Wired Ethernet networking"],
      ["Coaxial (RG-6)", "Cable internet/TV service"],
      ["Fiber Optic (LC)", "Long-distance, high-speed networking"],
      ["SATA (Data)", "Internal hard drive/SSD data transfer"],
      ["HDMI", "Digital video + audio to a monitor or TV"]
    ],
    explanation: "RJ-45 terminates twisted-pair Ethernet cable for LAN connections. Coaxial with an F-connector delivers cable internet/TV. Fiber (LC/SC/ST) is used for high-speed, long-distance, interference-immune links. SATA data cables connect internal drives to the motherboard. HDMI carries digital video and audio together to displays."
  },
  {
    type: "match",
    title: "Printer Types & Imaging Methods",
    prompt: "Match each printer type to how it actually puts an image on the page.",
    pairs: [
      ["Laser Printer", "Static charge attracts toner, fused with heat"],
      ["Inkjet Printer", "Sprays microscopic liquid ink droplets"],
      ["Thermal Printer", "Heat darkens chemically-treated paper"],
      ["Impact (Dot-Matrix) Printer", "Pins strike an ink ribbon against the paper"]
    ],
    explanation: "Laser printers use a charged drum and toner fused with heat. Inkjets spray liquid ink droplets (thermal or piezoelectric). Thermal printers use a heated print head on special heat-sensitive paper with no ink at all. Impact/dot-matrix printers physically strike an inked ribbon against the paper to form characters."
  },
  {
    type: "match",
    title: "Common Ports & Protocols",
    prompt: "Match each port number to the protocol that commonly uses it.",
    pairs: [
      ["Port 21", "FTP"],
      ["Port 22", "SSH"],
      ["Port 25", "SMTP"],
      ["Port 53", "DNS"],
      ["Port 443", "HTTPS"],
      ["Port 3389", "RDP"]
    ],
    explanation: "21 = FTP (file transfer), 22 = SSH (secure remote shell), 25 = SMTP (sending email), 53 = DNS (name resolution), 443 = HTTPS (encrypted web traffic), 3389 = RDP (Windows Remote Desktop Protocol)."
  },
  {
    type: "match",
    title: "RAID Levels",
    prompt: "Match each RAID level to its description.",
    pairs: [
      ["RAID 0", "Striping across disks for speed, with no redundancy"],
      ["RAID 1", "Mirroring data identically across two disks"],
      ["RAID 5", "Striping with distributed parity, tolerates one drive failure (min. 3 drives)"],
      ["RAID 10", "Mirrored pairs of disks that are then striped together (min. 4 drives)"]
    ],
    explanation: "RAID 0 boosts performance by striping data with zero fault tolerance - one drive failure loses everything. RAID 1 mirrors data for full redundancy at the cost of 50% usable capacity. RAID 5 stripes data with parity spread across drives, tolerating a single drive failure. RAID 10 combines mirroring and striping for both speed and redundancy, at the cost of needing at least 4 drives."
  }
];
