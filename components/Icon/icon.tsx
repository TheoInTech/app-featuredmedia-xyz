"use client";

import { shouldNotForwardPropsWithKeys } from "@/lib/utils";
import { styled } from "@mui/material";
import React, { CSSProperties, FC, SVGAttributes } from "react";

// Icon list
import add_circle from "@/components/Icon/icons/add-circle.svg";
import add_photo from "@/components/Icon/icons/add-photo.svg";
import all_platforms from "@/components/Icon/icons/all-platforms.svg";
import caret_left from "@/components/Icon/icons/caret-left.svg";
import check from "@/components/Icon/icons/check.svg";
import clock from "@/components/Icon/icons/clock.svg";
import close from "@/components/Icon/icons/close.svg";
import copy from "@/components/Icon/icons/copy.svg";
import discord from "@/components/Icon/icons/discord.svg";
import filter from "@/components/Icon/icons/filter.svg";
import glow_facebook from "@/components/Icon/icons/glow-facebook.svg";
import glow_instagram from "@/components/Icon/icons/glow-instagram.svg";
import glow_kick from "@/components/Icon/icons/glow-kick.svg";
import glow_tiktok from "@/components/Icon/icons/glow-tiktok.svg";
import glow_twitter from "@/components/Icon/icons/glow-twitter.svg";
import glow_youtube from "@/components/Icon/icons/glow-youtube.svg";
import heart from "@/components/Icon/icons/heart.svg";
import home from "@/components/Icon/icons/home.svg";
import instagram from "@/components/Icon/icons/instagram.svg";
import line from "@/components/Icon/icons/line.svg";
import logo from "@/components/Icon/icons/logo.svg";
import minus_circle from "@/components/Icon/icons/minus-circle.svg";
import phone_screen_time from "@/components/Icon/icons/phone-screen-time.svg";
import price_tag from "@/components/Icon/icons/price-tag.svg";
import profile from "@/components/Icon/icons/profile.svg";
import search from "@/components/Icon/icons/search.svg";
import share from "@/components/Icon/icons/share.svg";
import stats from "@/components/Icon/icons/stats.svg";
import svg_twitter from "@/components/Icon/icons/twitter.svg";
import verified from "@/components/Icon/icons/verified.svg";
import wallet from "@/components/Icon/icons/wallet.svg";
import whatsapp from "@/components/Icon/icons/whatsapp.svg";
import world from "@/components/Icon/icons/world.svg";

interface IconWrapperProps {
  color?: string;
}

const IconWrapper = styled("div", {
  shouldForwardProp: shouldNotForwardPropsWithKeys(["color"]),
})<IconWrapperProps>(({ theme, color }) => ({
  lineHeight: "0%",
  background: "transparent",
  "& svg": {
    display: "inline-block",
  },
  "& path": {
    fill: color,
  },
}));

const ICONS_MAP = new Map<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
>([
  ["add-circle", add_circle],
  ["add-photo", add_photo],
  ["all-platforms", all_platforms],
  ["caret-left", caret_left],
  ["check", check],
  ["clock", clock],
  ["close", close],
  ["copy", copy],
  ["discord", discord],
  ["filter", filter],
  ["glow-facebook", glow_facebook],
  ["glow-instagram", glow_instagram],
  ["glow-kick", glow_kick],
  ["glow-tiktok", glow_tiktok],
  ["glow-twitter", glow_twitter],
  ["glow-youtube", glow_youtube],
  ["heart", heart],
  ["home", home],
  ["instagram", instagram],
  ["line", line],
  ["logo", logo],
  ["minus-circle", minus_circle],
  ["phone-screen-time", phone_screen_time],
  ["price-tag", price_tag],
  ["profile", profile],
  ["search", search],
  ["share", share],
  ["stats", stats],
  ["twitter", svg_twitter],
  ["verified", verified],
  ["wallet", wallet],
  ["whatsapp", whatsapp],
  ["world", world],
]);
export interface IconProps {
  name: string;
  size?: number;
  height?: number;
  width?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export const Icon: FC<IconProps> = ({
  name,
  size = "24",
  height,
  width,
  className,
  color,
  style,
}) => {
  const IconComponent = ICONS_MAP.get(name);

  if (!IconComponent) {
    console.error("Icon not found:", name);
    return null;
  }

  return (
    <IconWrapper color={color} className={className} style={style}>
      <IconComponent width={width ?? size} height={height ?? size} />
    </IconWrapper>
  );
};

export interface CustomIconProps extends SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export const CustomIcon: FC<CustomIconProps> = (props) => {
  const height = props.height ?? props.size ?? 16;
  const width = props.width ?? props.size ?? 16;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
};
