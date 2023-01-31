function returnsSq(val) {
    if (isNaN(val)) {
        console.log("Not a number.")
    } else {
        return Math.sqrt(val);
    }

    function decreasing(val) {
        if (isNaN(val)) {
            console.log("Not a number.");
        } else {
            // There are a few different ways to implement this.
            // The following is a simple implementation with a for loop

            for (let i=val; i >= 0; i--) {
                console.log(i);
            }
        }

        function sum(a, b) {
            c = a + b;
            return c;
          }
          console.log(sum(5, 10));