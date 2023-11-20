import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: "png" });
    
    qr_svg.pipe(fs.createWriteStream("output.png"))
      .on("finish", () => {
        console.log("QR code generated successfully.");
      })
      .on("error", (err) => {
        console.error("Failed to generate QR code:", err);
      });
    
    fs.writeFile("input.txt", url, (err) => {
      if (err) {
        console.error("Failed to write input.txt:", err);
      } else {
        console.log("input.txt created successfully.");
      }
    });
});