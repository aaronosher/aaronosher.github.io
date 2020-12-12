/**
 * Default CSS definition for typescript,
 */
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.gif" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export default path;
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}
