
import React, { Component } from 'react'
import Item from'../Item/item_room';
import '../../css/room.css';

class Room extends Component {
    render() {
        return (

            <section className="body-room-4">
              <div className="container">
                <div className="wrap-room-4">
                  <div className="row">
                        <Item image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-18.jpg" roomtype="LUXURY ROOM" pri="Start form $120 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-19.jpg" des=" Lorem Ipsum has been the industry's standard dummy text ever since.the 1500s, when an unknown printer took a gallery                                           of type and scrambled it to make a type specimen book ..."></Item>
                        <Item image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-20.jpg" roomtype="FAMILY ROOM" pri="Start form $150 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-21.jpg" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery                                          of type and scrambled it to make a type specimen book ..."></Item>
                        <Item image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-22.jpg" roomtype="COUPLE ROOM" pri="Start form $150 per day" image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-23.jpg" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery                                          of type and scrambled it to make a type specimen book ..."></Item>
                        <Item image1="http://landing.engotheme.com/html/skyline/demo/images/Room/room-24.jpg" roomtype="STANDARD ROOM" pri="Start form $170 per day"image2="http://landing.engotheme.com/html/skyline/demo/images/Room/room-25.jpg" des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery                                          of type and scrambled it to make a type specimen book ..."></Item>
                  </div>
                </div>
              </div>
            </section>
          );
}
}
export default Room;
 