import Image from "./components/Image";
import Logo from "./assets/images/logo.png";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Menu from "./components/Menu";
import Flex from "./components/Flex";
import Container from "./components/Container";
import Hero from './assets/images/hero-image.png'

function App() {
  return (
    <>
      <div className="header_section bg-primaryColor-0">
        <Container className={'max-w-7xl'}>
          <Flex className={'justify-between items-center font-poppins font-semibold text-2xl py-14'}>
            <div className="img_wrapper">
              <Image imgSrc={Logo} imgAlt={'Logo'}/>
            </div>
            <div className="nav_link">
              <Flex className={'space-x-14 items-center'}>
                <Menu mText={"Man"} />
                <Menu mText={"Woman"} />
                <Menu mText={"Kids"} />
                <Menu mText={"Collection"} />
                <Menu mText={"Trends"} />
              </Flex>
            </div>
            <div className="nav_btn flex space-x-4">
              <Button bText={"Login"} className={'px-8 py-4 border border-btnColor-0 rounded-[10px] hover:bg-btnColor-0'} />
              <Button bText={"Sign up"} className={'px-8 py-4 border border-btnColor-0 rounded-[10px] hover:bg-btnColor-0'} />
            </div>
          </Flex>
        </Container>
      </div>

      <div className="banner_section bg-primaryColor-0 py-14">
        <Container className={'max-w-6xl'}>
          <Flex className={'justify-between items-center space-x-28'}>
            <div className="left_content font-poppins font-semibold">
              <Heading as={'h1'} text={'Find The Best Fashion Style For You'} className={'text-6xl max-w-lg leading-normal mb-9'}/>
              <Heading as={'p'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. '} className={'font-normal text-2xl max-w-xl leading-normal mb-16'}/>
              <Button bText={'Shop Now'} className={'bg-black py-5 px-16 rounded-[10px] text-white uppercase'}/>
            </div>
            <div className="right_content">
              <Image imgSrc={Hero} imgAlt={'Hero image'} className={'w-full'}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default App;
