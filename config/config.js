module.exports = {
    development: {
        username: process.env.username,  // Fetches from environment variable
        password: process.env.password,  // Fetches from environment variable
        database: process.env.database, // Fetches from environment variable
        host: process.env.host,         // Fetches from environment variable
        port: process.env.port,         // Fetches from environment variable
        ssl: {
            rejectUnauthorized: false,  // If you trust the server's certificate
            ca: `-----BEGIN CERTIFICATE-----
MIIETTCCArWgAwIBAgIUPdJM4T1lK5BtiaW1acRhmcPy4vswDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1MDc2MzBjOWMtMjQxNS00YTg1LWJlNTItMmZmYzkxZmU0
NzcxIEdFTiAxIFByb2plY3QgQ0EwHhcNMjUwMjEwMTIzMjMwWhcNMzUwMjA4MTIz
MjMwWjBAMT4wPAYDVQQDDDUwNzYzMGM5Yy0yNDE1LTRhODUtYmU1Mi0yZmZjOTFm
ZTQ3NzEgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBAIjgAXVEV/jYGGkiUS0mjXcNT6tqzBJnYoJiZ7q0z/fZRkCutc5ZDqpE
o1Avs/UfmjSrTqJ5otgQpk99gLO7hQkylXItzPlitl4C59+j/zUNvyYP0AcImqPY
bx+94ljlRFFoP5YMdS/DN9EpsP5KKNCEuBxTs8P/640H0S7ncJj2yzcV43OUuBNU
LAX5y6a9shmm8tB0mNeNnDaZifYWwfkr8pApuOHkwbtWt1uR5MBubUX3HQ0HcjkE
dwfupfff9DY1T3jCqKY2VElLmnper/PBAk4VSCIyxog3yFfaOUjMHG1+d6x0vzC1
6ETXruza6vim7fVkMSccJZVnUCCrgYbEW/LDPV5bMrXa5c5j6Wutk+7yMy/Pcv0F
ZQjla1Wg8trC2LADHRYinNHa34s+ICW5Kd7lWKQU6XTF46iR1ZwA0a+NA787lfe+
gSa4xSKLb6K1llyGFPZcDrd4/Wy5XE+1Kz64b7vxPUZKKLfJnSXJqUmfolVPVoN3
a601usnBUwIDAQABoz8wPTAdBgNVHQ4EFgQUcgBgF+z6pyGQM/9I6N1irBVtKBcw
DwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGB
AADPK3jjOU/TVa3kT9MkrAL9gZidtUt8eqwQuZ1OL1S7J0Cs0sAHUvn0c0G0fx2r
jzNx2++9EsQaG1ESaX50a8qCgGT6yhbaBtjrLIjJW3bFEU95zx4gJqGjsP6vTWJv
ndgj23paWdi/xXCYFeWXjz5V0kVMFKsPwAZZkJ4xnKWlUjIadBJFWVrbURk2dB3N
/Mol+i6p0HV4So40+wjg1RqUATidKW+tpLmaJI+wTwe17yxkZRTQZ709PulH+7+L
RBLzbIE5WSLlOD0AjTlOYF1JFy8hnMNhYU3x228LnAgDzQjcygpC4j7fpUQKkpHS
Fz2lpIq2f/JGE0Ou1W2o59UUok8DpScGAbHGb1/T0iR9L/kMCyeKMm8txB3mlejw
sGXSLkcUPxli9QKFaQWmDHg5B3u7dXT71nwKombRKEdUKQUXEUcsK5X2xc6FL3cX
mVRYMFtTnSQomjjDLXYm5sOU6jsIpJt5Q548xOv8j+qQFNn9Kxo+BdLz0ENl4FZG
lA==
-----END CERTIFICATE-----`
        }
    }
};
