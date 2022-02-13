// import React from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import styled from "styled-components";
// import ApprovedImage from "./ApprovedImage";
// import { LeftArrow, RightArrow } from "./Arrows";

// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// const StylesApprovedImages = styled.div``;
// const ApprovedImages = () => {
//   const imageitems = [
//     {
//       image: "90",
//       id: 1,
//     },
//     {
//       image: "990",
//       id: 2,
//     },
//     {
//       image: "990",
//       id: 3,
//     },
//     {
//       image: "990",
//       id: 4,
//     },
//     {
//       image: "990",
//       id: 5,
//     },

//   ];
//   const onWheel = (apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void => {
//     const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//     if (isThouchpad) {
//       ev.stopPropagation();
//       return;
//     }

//     if (ev.deltaY < 0) {
//       apiObj.scrollNext();
//     } else if (ev.deltaY > 0) {
//       apiObj.scrollPrev();
//     }
//   };

// const elemPrefix = "test";
// const getId = (index: number) => `${elemPrefix}${index}`;

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: getId(ind) }));
//     const [items] = React.useState(getItems);

//   return (
//     <div>
//       <ScrollMenu LeftArrow={LeftArrow} onWheel={onWheel} RightArrow={RightArrow}>
//         {items.map((item,index) => (
//           <ApprovedImage key={item.id+index} firstIndex={index} islast={items.length-1 === items.indexOf(item)} />
//         ))}
//       </ScrollMenu>
//     </div>
//   );
// };
// export default ApprovedImages;

import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./Card";
// NOTE: embrace power of CSS flexbox!
// import "./arrowsOnBottomOrTop.css";

// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function App() {
  const [items] = React.useState(getItems);

  const onWheel = (apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void => {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  };
  return (
    <>
      <div>
        <div>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
            {items.map(({ id }) => (
              <Card title={id} itemId={id} key={id} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default App;
