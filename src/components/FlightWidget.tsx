"use client";

export default function FlightWidget() {
    return (
        <div className="flex justify-center items-center w-full py-8">
            <iframe
                src="https://www.trip.com/partners/ad/S16447160?Allianceid=7473327&SID=284626357&trip_sub1="
                style={{ width: "320px", height: "320px", border: "none" }}
                frameBorder="0"
                scrolling="no"
                id="S16447160"
                title="Trip.com Search Box"
            ></iframe>
        </div>
    );
}
