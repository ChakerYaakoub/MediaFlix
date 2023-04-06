import "./MoviesSections.css";
import { SectionWrapper, SectionHeader } from "../index";
import Carousel from "react-elastic-carousel";

const MoviesSections = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <SectionWrapper>
        <SectionHeader>{props.titleMovieSection}</SectionHeader>
        <div className="movies-series-list">
          <Carousel
            // enableAutoPlay={true}
            // autoPlaySpeed={3000}
            // showArrows={true}
            // pagination={false}
            // isRTL={false}
            // easing="ease"
            // disableArrowsOnEnd={false}
            // focusOnSelect={true}
            breakPoints={breakPoints}
          >
            {props.MoviesList}
          </Carousel>
        </div>
      </SectionWrapper>
    </>
  );
};

export default MoviesSections;
