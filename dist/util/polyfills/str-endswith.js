module.exports = function(searchString, position) {
  var lastIndex, subjectString;
  subjectString = this.toString();
  if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
    position = subjectString.length;
  }
  position -= searchString.length;
  lastIndex = subjectString.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC9wb2x5ZmlsbHMvc3RyLWVuZHN3aXRoLmpzIiwic291cmNlcyI6WyJ1dGlsL3BvbHlmaWxscy9zdHItZW5kc3dpdGguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsWUFBRCxFQUFlLFFBQWY7QUFDZixNQUFBO0VBQUEsYUFBQSxHQUFnQixJQUFDLENBQUEsUUFBRCxDQUFBO0VBQ2hCLElBQUcsT0FBTyxRQUFQLEtBQW1CLFFBQW5CLElBQStCLENBQUMsUUFBQSxDQUFTLFFBQVQsQ0FBaEMsSUFBc0QsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFYLENBQUEsS0FBd0IsUUFBOUUsSUFBMEYsUUFBQSxHQUFXLGFBQWEsQ0FBQyxNQUF0SDtJQUNFLFFBQUEsR0FBVyxhQUFhLENBQUMsT0FEM0I7O0VBRUEsUUFBQSxJQUFZLFlBQVksQ0FBQztFQUN6QixTQUFBLEdBQVksYUFBYSxDQUFDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsUUFBcEM7U0FDWixTQUFBLEtBQWEsQ0FBQyxDQUFkLElBQW9CLFNBQUEsS0FBYTtBQU5sQiIsInNvdXJjZXNDb250ZW50IjpbIiMgdXNlIHBvbHlmaWxsIGZvciBTdHJpbmcuZW5kc1dpdGggaWYgbmVlZGVkXG4jaWYgbm90IFN0cmluZy5wcm90b3R5cGU/LmVuZHNXaXRoXG4jICBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoID0gc3RyaW5nX2VuZHN3aXRoXG5tb2R1bGUuZXhwb3J0cyA9IChzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSAtPlxuICBzdWJqZWN0U3RyaW5nID0gQHRvU3RyaW5nKClcbiAgaWYgdHlwZW9mIHBvc2l0aW9uICE9ICdudW1iZXInIG9yICFpc0Zpbml0ZShwb3NpdGlvbikgb3IgTWF0aC5mbG9vcihwb3NpdGlvbikgIT0gcG9zaXRpb24gb3IgcG9zaXRpb24gPiBzdWJqZWN0U3RyaW5nLmxlbmd0aCAjIG5vcWFcbiAgICBwb3NpdGlvbiA9IHN1YmplY3RTdHJpbmcubGVuZ3RoXG4gIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGhcbiAgbGFzdEluZGV4ID0gc3ViamVjdFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pXG4gIGxhc3RJbmRleCAhPSAtMSBhbmQgbGFzdEluZGV4ID09IHBvc2l0aW9uXG4iXX0=
