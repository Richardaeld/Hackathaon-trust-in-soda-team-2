# Thoughts
## Information found
[Different Wheel Chair Types](https://wheelchairnetwork.org/kb/dim-mass-space/#references)
## Different calculation coniderations for these chairs
+ Mid wheel drive chairs
+ Rear wheel drive chair with full differential steering
+ Manual Wheel Chair
### Making a Radius Calculation
+ These chairs pivot on a centered axis which gives the chairs a negligible increase to turn radius outside of the phycial size of the chair.

---

# Turn Radius Equation(s)
## Method 1 -- RADIUS - of Outside Front Wheel -- Gives occasional negative number
### Information found
+ [Turning Radius Calculations](https://www.quora.com/What-is-the-method-to-calculate-turning-radius-if-only-the-steering-ratio-and-vehicles-basic-dimensions-are-known)
### variables
+ a = width between front two wheels
+ b = width between front and back wheels
+ c = width between back two wheels
+ tau = angle of wheel (estimated between 30 and 45 deg)
### Formula
+ Radius = b/sin($\psi$) + (a-c)/2

---

## Method 2 -- RADIUS - of Front Wheel -- Simplified version but feels erroneous
### Information Found
+ [Turning Radius Calculations](http://www.davdata.nl/math/turning_radius.html)
### Variables
+ w = Distance between front and back axis
+ alpha = Degree of turn for front wheel
+ R = Radius of front wheel
### Formula
+ R = W / $\sin$($\alpha$)

---

## Method 3 -- DIAMETER - for wheel chair turning -- Complicated but thorough
### Information found
+ [Turning Radius Calculations](https://www.udeworld.com/spaceworkshop2003/Papers/WEB%20-%20Working%20Area%20of%20%20Wheelchairs%20(Ziegler).htm)
### Variables
+ y = Width between chair center and back wheel
+ h = Width between chair center and front wheel
+ g = Width between front and back wheel
+ alpha = Angle of front wheel
+ x = Width between front most part of chair to center back wheel
### Formula
TD = 2 * $\sqrt{y + h + (g/sin(\alpha))^2 + x^2}$

---

# Additional information
[Detailed math -- Where the different wheel chair types image was pulled from](https://www.udeworld.com/spaceworkshop2003/Papers/WEB%20-%20Working%20Area%20of%20%20Wheelchairs%20(Ziegler).htm)
+ This gives information to check if a hallway is wide enough for a wheel chair to do a 180deg turn