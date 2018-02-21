/** Bar
 *  responsive.js
 *  Created by Mauro J. Pappaterra on 20 of February 2018.
 */

/*RESPONSIVENESS CONTROLS
* Call responsive() method on corresponding script page
* This script must be loaded in all pages, along with both the js script and view corresponding to that particular page!
*/

$(window).onload(responsive()); /*On windows load*/
$(window).resize(responsive()); /*On window resize (This one needs some fixin')*/