document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("filterBtn").addEventListener("click", function(event) {
        // Create a modal element
        var modal = document.createElement("div");
        modal.className = "modal";

        // Create a modal content container
        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";

        // Create a checklist for each element
        var elements = document.getElementsByClassName("element");
        for (var i = 0; i < elements.length; i++) {
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = !elements[i].classList.contains("hidden");
            
            var text = elements[i].innerHTML;
            var parsedText = text.substring(text.indexOf("<h2>") + 4, text.lastIndexOf("</h2>"));
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(parsedText));
            label.appendChild(checkbox);
            
            modalContent.appendChild(label);
        }

        // Create a close button
        var closeButton = document.createElement("button");
        closeButton.textContent = "Close";
        closeButton.style.float = "right";
        closeButton.addEventListener("click", function() {
            modal.style.display = "none";
        });
        
        // Append the close button to the modal content
        modalContent.appendChild(closeButton);

        var applyButton = document.createElement("button");
        applyButton.textContent = "Apply";
        applyButton.style.float = "right";
        applyButton.addEventListener("click", function() {
            applyChanges(modalContent, elements);
            modal.style.display = "none";
        });

        modalContent.appendChild(applyButton);

        // Append the modal content to the modal
        modal.appendChild(modalContent);

        // Append the modal to the document body
        document.body.appendChild(modal);

        // Display the modal
        modal.style.display = "block";
    });
});

function applyChanges(modalContent, elements) {
    var checkboxes = modalContent.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function(checkbox, index) {
        if (checkbox.checked) {
            elements[index].style.display = "block";
        } 
        else {
            elements[index].style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addSet").addEventListener("click", function(event) {
        var additionalSetsDiv = document.getElementById("additionalSets");

        var setDiv = document.createElement("div");
        setDiv.classList.add("set");

        var weightLabel = document.createElement("label");
        weightLabel.textContent = "Weight (lbs):";
        var weightInput = document.createElement("input");
        weightInput.type = "number";
        weightInput.classList.add("weight");
        weightInput.placeholder = "Weight lifted";

        var repsLabel = document.createElement("label");
        repsLabel.textContent = "Reps:";
        var repsInput = document.createElement("input");
        repsInput.type = "number";
        repsInput.classList.add("reps");
        repsInput.placeholder = "Number of reps";

        setDiv.appendChild(weightLabel);
        setDiv.appendChild(weightInput);
        setDiv.appendChild(repsLabel);
        setDiv.appendChild(repsInput);

        additionalSetsDiv.appendChild(setDiv);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addExercise").addEventListener("click", function(event) {
        var exerciseName = document.getElementById("exercise").value;
        var defaultWeight = document.querySelector("#defaultSet .weight").value;
        var defaultReps = document.querySelector("#defaultSet .reps").value;

        var sets = [{
            weight: defaultWeight,
            reps: defaultReps
        }];

        var additionalSets = document.querySelectorAll("#additionalSets .set");
        additionalSets.forEach(function(set) {
            var weight = set.querySelector(".weight").value;
            var reps = set.querySelector(".reps").value;
            sets.push({
                weight: weight,
                reps: reps
            });
        });

        console.log("Exercise: " + exerciseName);
        console.log("Sets:");
        sets.forEach(function(set, index) {
            console.log("Set " + (index + 1) + ": Weight " + set.weight + " lbs, Reps " + set.reps);
        });

        // Clear input fields
        document.getElementById("exercise").value = "";
        document.querySelector("#defaultSet .weight").value = "";
        document.querySelector("#defaultSet .reps").value = "";
        var additionalSetsDiv = document.getElementById("additionalSets");
        additionalSetsDiv.innerHTML = ""; // Clear additional sets
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addCardio").addEventListener("click", function(event) {
        var exerciseName = document.getElementById("exercise").value;
        var defaultMinutes = document.querySelector("#time .minutes").value;
        var defaultSeconds = document.querySelector("#time .seconds").value;
        var defaultIntensity = document.querySelector("#intensity .intensity").value;

        var set = [{
            minutes: defaultMinutes,
            seconds: defaultSeconds,
            intensity: defaultIntensity
        }];

        var minutes = set.querySelector(".minutes").value;
        var seconds = set.querySelector(".seconds").value;
        var intensity = set.querySelector(".intensity").value;
        set.push({
            minutes: minutes,
            seconds: seconds,
            intensity: intensity
        });

        console.log("Exercise: " + exerciseName);
        console.log("Sets:");
        console.log("Minutes: " + set.minutes + " Seconds: " + set.seconds + " Intensity: " + set.intensity);

        // Clear input fields
        document.getElementById("exercise").value = "";
        document.querySelector("#time .minutes").value = "";
        document.querySelector("#time .seconds").value = "";
        document.querySelector("#intensity .intensity").value = "";
    });
});
