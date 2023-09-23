

// Components
import SocialMedia from "./components/SocialMedia";
import Form from "./components/Form";
import Container from "./components/Container";

export default function ContactUs({
  scrollBarThumb,
  scrollBarTrack,
  mx = "3xl:mx-96",
}) {
  
  return (
    <Container mx={mx}>
     
      
         <Form 
         scrollBarThumb={scrollBarThumb}
         scrollBarTrack={scrollBarTrack}
         />
          <SocialMedia/>
       
    </Container>
  );
}
