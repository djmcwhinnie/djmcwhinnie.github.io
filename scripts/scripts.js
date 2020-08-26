// Remove Phantom Text Nodes - Firefox Only?
function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if( child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue)) ) {
      node.removeChild(child);
      n --;
    } else if(child.nodeType === 1) {
      clean(child);
    }
  }
}
clean(document);

// Flickety Carousel
var flkty = new Flickity( '.design__carousel', {
  cellAlign: 'left',
  contain: true
});

var flkty = new Flickity( '.hobbies__carousel', {
  cellAlign: 'left',
  contain: true
});

// Footer Date
var footerDate = new Date();
document.getElementById("footer-date").innerHTML = footerDate.getFullYear();