const RAID_LEVELS = [
  {
    name: "RAID 0 (Striping)",
    minDrives: "2",
    faultTolerance: "None - one drive failure loses all data",
    usableCapacity: "100% of total drive space",
    description: "Splits data evenly across all drives for maximum speed. Offers zero redundancy: if any single drive fails, the entire array is lost. Used when raw speed matters more than data safety (e.g., video editing scratch disks).",
  },
  {
    name: "RAID 1 (Mirroring)",
    minDrives: "2",
    faultTolerance: "Can survive 1 drive failure per mirrored pair",
    usableCapacity: "50% of total drive space",
    description: "Writes an identical copy of all data to two drives at once. If one drive fails, the other still has a full copy. Simple and reliable, but you pay for double the storage to get it.",
  },
  {
    name: "RAID 5 (Striping with Parity)",
    minDrives: "3",
    faultTolerance: "Can survive 1 drive failure",
    usableCapacity: "(n-1)/n of total space, e.g. 2/3 with 3 drives",
    description: "Stripes data across all drives like RAID 0, but also spreads parity (recovery) information across them. If one drive fails, the array can rebuild the lost data from the remaining drives' parity. A common balance of speed, capacity, and redundancy.",
  },
  {
    name: "RAID 10 (1+0)",
    minDrives: "4",
    faultTolerance: "Can survive multiple failures, as long as both drives in the same mirrored pair don't fail together",
    usableCapacity: "50% of total drive space",
    description: "Combines mirroring and striping: drives are mirrored in pairs (RAID 1), and those pairs are then striped together (RAID 0). Delivers both strong performance and strong redundancy, at the cost of needing at least 4 drives and losing half your total capacity.",
  },
];

const PORTS_PROTOCOLS = [
  { port: "20 / 21", protocol: "FTP", detail: "File Transfer Protocol - transferring files (21 = control, 20 = data)" },
  { port: "22", protocol: "SSH", detail: "Secure Shell - encrypted remote command-line access" },
  { port: "23", protocol: "Telnet", detail: "Unencrypted remote command-line access (largely obsolete/insecure)" },
  { port: "25", protocol: "SMTP", detail: "Simple Mail Transfer Protocol - sending email" },
  { port: "53", protocol: "DNS", detail: "Domain Name System - resolving domain names to IP addresses" },
  { port: "67 / 68", protocol: "DHCP", detail: "Dynamic Host Configuration Protocol - automatic IP address assignment" },
  { port: "80", protocol: "HTTP", detail: "Unencrypted web traffic" },
  { port: "110", protocol: "POP3", detail: "Post Office Protocol v3 - downloading email to a single device" },
  { port: "143", protocol: "IMAP", detail: "Internet Message Access Protocol - syncing email across multiple devices" },
  { port: "443", protocol: "HTTPS", detail: "Encrypted (TLS/SSL) web traffic" },
  { port: "445", protocol: "SMB", detail: "Server Message Block - Windows file/printer sharing" },
  { port: "3389", protocol: "RDP", detail: "Remote Desktop Protocol - Windows remote desktop access" },
  { port: "3306", protocol: "MySQL", detail: "Default port for MySQL database connections" },
  { port: "1433", protocol: "SQL Server", detail: "Default port for Microsoft SQL Server connections" },
];

const WIRELESS_SECURITY = [
  { name: "Open (no security)", detail: "No encryption at all - anyone in range can join and see traffic. Never use for anything sensitive." },
  { name: "WEP", detail: "Wired Equivalent Privacy. The oldest Wi-Fi encryption standard - broken and crackable in minutes with free tools. Should never be used today." },
  { name: "WPA", detail: "Wi-Fi Protected Access. Replaced WEP but still uses the weak RC4 cipher underneath (via TKIP). Considered obsolete." },
  { name: "WPA2", detail: "Adds AES encryption (via CCMP), a major security improvement over WPA/WEP. Comes in Personal (PSK/shared password) and Enterprise (802.1X/RADIUS, unique per-user login) modes. Still widely used and considered secure when configured correctly." },
  { name: "WPA3", detail: "The current standard. Adds stronger encryption and SAE (Simultaneous Authentication of Equals), which protects against offline password-guessing attacks even if someone captures the handshake. Also available in Personal and Enterprise modes." },
];

const FILE_SYSTEMS = [
  { name: "FAT32", maxFileSize: "4 GB", detail: "Old but nearly universal compatibility (Windows, macOS, Linux, cameras, game consoles). No built-in permissions or encryption. Common default for small USB drives and SD cards." },
  { name: "exFAT", maxFileSize: "16 EB (practically unlimited)", detail: "Designed to replace FAT32 for flash drives - removes the 4GB file size limit while staying broadly cross-platform compatible. No journaling or permissions, so it's still not ideal as a primary OS drive format." },
  { name: "NTFS", maxFileSize: "16 EB (practically unlimited)", detail: "Windows' native file system. Supports file/folder permissions, encryption (EFS), compression, and journaling (crash recovery). Read/write native only on Windows; other OSes often need extra drivers to write to it." },
  { name: "ext4", maxFileSize: "16 TB", detail: "The standard Linux file system. Supports journaling and permissions like NTFS, but isn't natively readable/writable on Windows without third-party tools." },
  { name: "APFS", maxFileSize: "8 EB (practically unlimited)", detail: "Apple File System - macOS's modern default. Optimized for SSDs/flash storage, with built-in encryption, snapshots, and space sharing across volumes." },
];
