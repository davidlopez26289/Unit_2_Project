"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: David Lopez
   Date:  2/4/20 
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
// loops through the array adding one table row
for (var i = 0; i < item.length; i++) {
   cartHTML += "<tr>";
   cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   // calculates the cost of the items ordered
   var itemCost = itemPrice[i]*itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";
   
   orderTotal += itemCost;
}
// the total cost of the order 
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";

document.getElementById("cart").innerHTML = cartHTML;