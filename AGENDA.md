# Data Stream D3 Intermediate

### Aims

* Recap
* Enter/Exit/Update
  * Resize
  * Add buttons
  * Use dynamic data
* Paths
* Example chart types
  * Pi 
  * Chord
  * Tree
  * Force Layout
  * Link to Bostock example for each

### 1. Recap

* Start with example from Task 8
  * Refactored into create, update and resize functions
  * To start everything is in create - which is run once at start
  * Removed colours

> ~ 5 mins

### 2. Enter / Update / Exit

* Seperate out code that should be run once on startup, and code that should be run every time an update is called
  * Move common variables outside of create so we can access them from update function
  * Move data driven code to update function
    * eg. xmax, ymax
    * xscale and yscale because they depend on xmax and ymax
    * xaxis yaxis
  * Some code snippets we want to run some of it once, and some of it repeatedly
    * This requires refactoring it into a variable which we can access later in update
    * Creating svg elements eg. groups only need to be done once
    * The xAxis might change on update so .call(xAxis) moves into update function

> ~ 20 mins

* Create and update functions
  * Create two buttons - create and update
  * Creating svg elements from objArray is data driven
    * So move all of groups code into update
    * But at the moment it only gets called once because of the .enter() function
      * The .selectAll() function references the HTML elements that have been created - 0 of these
      * The .data() function references the Javascript array - 4 of these
      * D3 noticed the difference which triggers the .enter() function
      * This only happens once
        * After this, there are always 4 data points
        * So code under .enter() is only run once irrelevent of how many times we call the update() function
      
* Add, change, remove data
  * Create UPDATE on old data
    * New circles will be green
    * Old circles will be black
  * Create a Add Data button in HTML
    * On click it will add data
  * Create addData() function
    * Push a new value to objArray
    * Then update()
    * That works
  * Create a Change Data button in HTML
    * On click it will change existing data
  * Create changeData() function
    * Change objArray[0] value
    * Why doesn't this work by just calling update?
    * Currently the code only runs when we have new data points as we're only using .enter()
    * Show axis update
    * Add axis transition
  * Refactor code to seperate out enter and update functions
    * ENTER
      * Create group
      * Move datapoints to 0, 0
      * Create elements inside group
    * ENTER + UPDATE
      * Transform all datapoints to new location
  * Exit
    * Chained transitions to grow and shrink radius to zero
    * Remove()

> ~ 45 mins - 1 hour

### 3. Paths

* Create line function
  * .line()
  * .x(function ...) return xScale(d.x)
  * .y(function ...) return yScale(d.y)
* Create path
  * append('path')
  * .datum(objArray)
  * .attr('d', linefunction)
* 



