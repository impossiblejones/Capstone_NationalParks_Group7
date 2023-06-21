

const MountainTest = {
    "name": "Mt. Washington",
    "elevation": 6288,
    "effort": "Strenuous",
    "img": "Washington-StoryImage_2.jpg",
    "desc": "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
    "coords": {
        "lat": 44.270403,
        "lng": -71.303501
    }
}
const MountainCard = () => {
    return (
        <div className="MountainCard">   
            <h2>name</h2>
            <p>elevation</p>
            <p>effort</p>
            <img/>
            <p>desc</p>
            <p>coords</p>
        </div>
);
}

export default MountainCard;