import React from "react";
import Card from "./Card";

var data = {
    person1 : {
        name: "Beyonce",
        img: "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
        tel: "+123 456 789",
        email: "b@beyonce.com"
    },
    person2 : {
        name: "Jack Bauer",
        img: "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
        tel: "+987 654 321",
        email: "jack@nowhere.com"
    },
    person3 : {
        name: "Chuck Norris",
        img: "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
        tel: "+918 372 574",
        email: "gmail@chucknorris.com"
    }
}

function App() {
    return (
        <div>
            <Card name={data.person1.name} img={data.person1.img} tel={data.person1.tel} email={data.person1.email}/>
            <Card name={data.person2.name} img={data.person2.img} tel={data.person2.tel} email={data.person2.email}/>
            <Card name={data.person3.name} img={data.person3.img} tel={data.person3.tel} email={data.person3.email}/>
        </div>
    )
};

export default App;