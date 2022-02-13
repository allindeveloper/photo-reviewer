import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IImage } from "../../../types/image";
import { LeftArrow, RightArrow } from "./Arrows";
import { Card } from "./Card";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export interface IApprovedImages {
  approvedImages: IImage[];
}

const ApprovedImages = ({ approvedImages }: IApprovedImages) => {
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
            {approvedImages.map(({ id }) => (
              <Card title={id} itemId={id} key={id} />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
};
export default ApprovedImages;
