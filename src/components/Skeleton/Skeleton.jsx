import React from "react";
import ContentLoader from "react-content-loader";

export default function Skeleton(props) {
  return (
    <div className="pizza-block__wrapper">
      <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={464}
        viewBox="0 0 280 464"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="517" y="371" rx="3" ry="3" width="88" height="6" />
        <rect x="542" y="370" rx="3" ry="3" width="52" height="6" />
        <rect x="448" y="375" rx="3" ry="3" width="410" height="6" />
        <rect x="378" y="375" rx="3" ry="3" width="380" height="6" />
        <rect x="460" y="374" rx="3" ry="3" width="178" height="6" />
        <circle cx="584" cy="381" r="20" />
        <circle cx="133" cy="122" r="119" />
        <rect x="1" y="269" rx="0" ry="0" width="272" height="29" />
        <rect x="0" y="318" rx="0" ry="0" width="272" height="87" />
        <rect x="121" y="423" rx="9" ry="9" width="151" height="30" />
        <rect x="0" y="427" rx="0" ry="0" width="115" height="21" />
      </ContentLoader>
    </div>
  );
}
