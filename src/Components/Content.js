import React from "react";
import "../Styles/main.css";

function Content() {
    return (
        <div className="content grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
                <div className="left-column">
                    <span className="title">Android Mobile developer</span>
                    <h1>
                        Hi, I’m <span>Victor!</span>
                    </h1>
                    <p>
                        Need a professional in analyzing and modifying existing software as
                        well as designing, constructing and testing end-user applications
                        that meet user needs?
                    </p>
                    <a href="#" className="btn">
                        Hire me
                    </a>
                </div>
            </div>
            <div className="col-span-12 md:col-span-6">
                <div className="right-column p-4 m-4">
                    <img
                        className="mr-4 h-auto max-w-full md:max-w-non pd:8"
                        src="https://media.istockphoto.com/id/490507056/photo/golden-tailed-sapphire-hummingbird.jpg?s=612x612&w=0&k=20&c=3HAADlGPbM7rtuH5NPX8xoLtZBWDkVVxo0DdoWnyHNE="
                        alt="image description"
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;
