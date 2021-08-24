import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      
      let dx = Math.pow(Point.x - center.x, 2);
      let dy = Math.pow(Point.y - center.y, 2);
      let distanceFromCenter = Math.sqrt(Math.abs(dx) + Math.abs(dy));

      if(distanceFromCenter <= radius){
        return true;
      }
      return false;
    }
  }
}
