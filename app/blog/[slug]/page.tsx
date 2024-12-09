import React from "react";

export default function RecipePage(props) {
  const slug = props.params.slug;
  return <main>{slug}</main>;
}
