import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2399 22.32L22.3199 18.24L5.75993 1.67999L1.67993 5.75999L18.2399 22.32ZM2.35193 5.75999L5.75993 2.35199L13.4399 10.032C12.5279 9.83999 11.5439 10.104 10.8239 10.8C10.1039 11.52 9.83993 12.528 10.0319 13.44L2.35193 5.75999ZM11.1359 14.52C10.2239 13.608 10.2239 12.096 11.1599 11.136C12.0959 10.224 13.6079 10.224 14.5199 11.136L21.6479 18.24L18.2399 21.648L11.1359 14.52ZM11.4239 12.864C11.4239 13.656 12.0719 14.304 12.8639 14.304C13.6559 14.304 14.3039 13.656 14.3039 12.864C14.3039 12.072 13.6559 11.424 12.8639 11.424C12.0719 11.424 11.4239 12.072 11.4239 12.864ZM11.9039 12.864C11.9039 12.336 12.3359 11.904 12.8639 11.904C13.3919 11.904 13.8239 12.336 13.8239 12.864C13.8239 13.392 13.3919 13.824 12.8639 13.824C12.3359 13.824 11.9039 13.392 11.9039 12.864Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoThin;