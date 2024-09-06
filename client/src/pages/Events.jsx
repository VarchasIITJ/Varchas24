import { ThreeDCardDemo } from "../components/EventCard";

export default function Event() {
  return (
    <div className="h-full w-screen bg-black p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ThreeDCardDemo imageUrl="/EventsGallery/first.jpg" name='Atheletics' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/second.jpg" name='Badminton' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/third.jpg" name='Basketball' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/fourth.jpg" name='Kabaddi' slogan='A line about that sport'/>

        <ThreeDCardDemo imageUrl="/EventsGallery/first.jpg" name='Chess' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/second.jpg" name='Cricket' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/third.jpg" name='Football' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/fourth.jpg" name='Weightlfiting' slogan='A line about that sport'/>

        <ThreeDCardDemo imageUrl="/EventsGallery/first.jpg" name='Lawn Tennis' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/second.jpg" name='Squash' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/third.jpg" name='Table Tennis' slogan='A line about that sport'/>
        <ThreeDCardDemo imageUrl="/EventsGallery/fourth.jpg" name='VolleyBall' slogan='A line about that sport'/>
        
        <ThreeDCardDemo imageUrl="/EventsGallery/fourth.jpg" name='ESports' slogan='A line about that sport'/>
        
      </div>
    </div>
  );
}
