//WIP Names and description function
function createAbilityObjects(moveDescriptions, moveNames) {
  const abilities = {};

  for (const key in moveDescriptions) {
    if (moveDescriptions.hasOwnProperty(key)) {
      const description = moveDescriptions[key];
      const name = key.replace("Description", "").toUpperCase();

      // Check if the name is included in moveNames
      const matchingKey = Object.keys(moveNames).find((moveKey) =>
        moveKey.includes(name)
      );
      if (matchingKey) {
        abilities[matchingKey] = {
          name: name,
          description: description,
        };
      }
    }
  }

  return abilities;
}

//for Names
function moveNameParser(data) {
  const names = {};
  const lines = data.split(",").map((item) => item.trim());

  lines.forEach((e) => {
    if (e) {
      const [id, name] = e.split("=");
      const abilityKey = id.trim().replace(/\[|\]/g, "");
      const abilityName = name
        .trim()
        .replace(/[\(\)_]/g, "")
        .slice(1, -1);

      names[abilityKey] = abilityName;
    }
  });
  return names;
}

// for Descriptions
function parseDescriptions(data) {
  const descriptions = {};

  const lines = data.split(";").map((line) => line.trim()); // Trim whitespace from each line
  lines.forEach((e) => {
    if (e && !e.startsWith("//")) {
      // Check if the line is not empty
      const line = e.replace("static const u8", "");
      const [descName, value] = line.split("=").map((item) => item.trim()); // Trim whitespace around each part
      if (descName && value) {
        // Check if both descName and value are not empty/undefined
        const name = descName.replace("[]", "").slice(1);
        const removeFormatting = /["'_\(\)\n]/g;
        const description = value.replace(removeFormatting, "");

        descriptions[name] = description;
      }
    }
  });

  return descriptions;
}

//For Evolutions

function parseEvoData(data) {
  //Storing Everything
  let allEvoData = {};

  // Split data by line breaks
  const lines = data.split("}},");

  lines.forEach((e) => {
    const line = e.trim();
    if (line) {
      const [species, evoData] = line.trim().split("=");
      const speciesName = species.trim().replace("[", "").replace("]", "");
      const evoDataClean = evoData.trim().replace(/{{|}}/g, "");

      if (!allEvoData[speciesName]) {
        allEvoData[speciesName] = [];
      }

      const evoArr = evoDataClean.split(",");
      //this adds additional species
      for (let i = 0; i < evoArr.length; i += 3) {
        const evoType = evoArr[i].trim();
        const requirement = isNaN(evoArr[i + 1].trim())
          ? requirement
          : parseInt(requirement);
        const evolvesTo = evoArr[i + 2].trim();

        allEvoData[speciesName].push({
          EvoType: evoType.trim(),
          Requirement: requirement,
          evolveTo: evolvesTo.trim().replace("}", ""),
        });
      }
    }
  });
  return allEvoData;
}

//for PokemonData(fileName basestats)

function parsePokemonData(data) {
  const lines = data.split("\n");
  const jsonResult = {};
  let currentSpecies = null;
  let pokemonData = {};
  console.log("lines", lines);
  lines.forEach((line) => {
    line = line.trim();

    // Starting a new Pokémon species block
    if (line.startsWith("[")) {
      if (currentSpecies !== null) {
        jsonResult[currentSpecies] = pokemonData;
      }
      currentSpecies = line.split("]")[0].substring(1);
      pokemonData = {};
    }
    // Detecting an attribute line
    else if (line.includes("=") && !line.startsWith("//")) {
      console.log(line);
      const [attribute, value] = line.split("=").map((s) => {
        const newVal = s.trim().replace(".", "");
        if (s.endsWith(",")) return newVal.substring(0, newVal.length - 1);
        return newVal;
      });
      let processedValue = value;

      // Handling list attributes
      if (value.startsWith("{")) {
        console.log(value);
        processedValue = value
          .substring(1, value.length - 1)
          .split(",")
          .map((v) => v.trim());
      }
      // Handling the gender ratio
      else if (value.includes("PERCENT_FEMALE")) {
        const percent = parseFloat(value.match(/\(([^)]+)\)/)[1]);
        processedValue = Math.min(254, Math.floor((percent * 255) / 100));
      }
      // Handling numeric values
      else if (!isNaN(value)) {
        processedValue = Number(value);
      }
      // Handling boolean values
      else if (value === "FALSE") {
        processedValue = false;
      } else if (value === "TRUE") {
        processedValue = true;
      }

      pokemonData[attribute] = processedValue;
    }
  });

  // Adding the last species block if it hasn't been added yet
  if (currentSpecies !== null) {
    jsonResult[currentSpecies] = pokemonData;
  }

  return jsonResult;
}
