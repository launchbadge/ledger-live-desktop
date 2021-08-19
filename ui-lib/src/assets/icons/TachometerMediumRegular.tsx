import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerMediumRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.06813 20.136H19.9081C21.2281 18.456 22.0681 16.296 22.0681 13.968C22.0681 9.24001 18.7561 5.23201 14.3401 4.17601V5.80801C17.8921 6.81601 20.5081 10.104 20.5081 13.968C20.5081 15.672 19.9801 17.256 19.1161 18.576H4.86013C3.99613 17.256 3.49213 15.672 3.49213 13.968C3.49213 10.104 6.08413 6.81601 9.63613 5.80801V4.17601C5.22013 5.23201 1.93213 9.24001 1.93213 13.968C1.93213 16.296 2.74813 18.456 4.06813 20.136ZM11.2201 13.968C11.2201 14.4 11.5561 14.736 11.9881 14.736C12.4201 14.736 12.7801 14.4 12.7801 13.968V3.86401H11.2201V13.968Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerMediumRegular;