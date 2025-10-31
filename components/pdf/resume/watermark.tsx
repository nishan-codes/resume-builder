'use client'
import { Canvas, View } from "@react-pdf/renderer";

const path = `
M50,100 L100,50 L150,100 Z
M100,50 L150,100 L200,50 Z
M150,100 L200,50 L250,120 Z
M200,50 L250,120 L300,80 Z
M250,120 L300,80 L350,150 Z
M150,100 L100,150 L200,150 Z
M200,150 L250,120 L300,180 Z
M250,120 L300,180 L350,150 Z
M300,80 L350,150 L400,100 Z
M300,180 L350,150 L400,200 Z
M100,150 L150,200 L200,150 Z
M150,200 L200,250 L250,180 Z
M200,150 L250,180 L300,180 Z
M250,180 L300,230 L350,150 Z
M300,230 L350,200 L400,250 Z
M350,150 L400,200 L450,100 Z`;

export const Watermark = () => {
  const paint = (doc: any) =>
    doc.path(path).opacity(0.1).strokeColor("#000000").lineWidth(2).stroke();

  return (
    <View
      style={{ position: "absolute", right: -19, top: -22, zIndex: -10 }}
      fixed
    >
      <Canvas paint={paint} style={{ width: 423, height: 470 }} />
    </View>
  );
};
