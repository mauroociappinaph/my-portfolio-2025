export interface ContactProps {
  title: string;
  description: string;
  image: string;
  github: string;
}


export interface HeroProps {
  badge?: string
  title1?: string
  title2?: string
}


export interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}


export interface ShapeConfig {
  delay: number;
  width: number;
  height: number;
  rotate: number;
  gradient: string;
  className: string;
}
