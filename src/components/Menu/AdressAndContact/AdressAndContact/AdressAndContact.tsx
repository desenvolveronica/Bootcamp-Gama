import "./AdressAndContact.css";

export default function AdressAndContact() {
  return (

    <div id="adress-and-contact">
        <div id="img-text">
          <img
            src="./src/components/Pictures/location_on.svg"
            alt="location"
            width={"9px"}
            height={"15px"}
            style={{ paddingBottom: "2px" }}
            className="picture1"
          />
          <p id="adress">Rua da Bahia, 1000</p>
        </div>

        <div id="img-text">
          <img
            src="./src/components/Pictures/call.svg"
            alt="location"
            width={"9px"}
            height={"15px"}
            style={{ paddingBottom: "2px" }}
            className="picture1"
          ></img>
          <p id="contact">(31) 3333-3333</p>
        </div>
    </div>
  );
}