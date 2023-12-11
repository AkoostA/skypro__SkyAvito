export function parseMonth(monthNum) {
  switch (monthNum) {
    case 0: {
      return "января";
    }
    case 1: {
      return "февраля";
    }
    case 2: {
      return "марта";
    }
    case 3: {
      return "апреля";
    }
    case 4: {
      return "мая";
    }
    case 5: {
      return "июня";
    }
    case 6: {
      return "июля";
    }
    case 7: {
      return "августа";
    }
    case 8: {
      return "сентября";
    }
    case 9: {
      return "октября";
    }
    case 10: {
      return "ноября";
    }
    case 11: {
      return "декабря";
    }
    default:
      return "";
  }
}

export function parseData(value) {
  const stringValue = value.toString();
  let result;

  if (stringValue.length === 1) {
    result = `0${stringValue}`;
  } else {
    result = stringValue;
  }

  return result;
}

export function safeString(string) {
  let validateString = string;
  validateString = validateString
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  return validateString;
}

export function uppString(string) {
  let validateString = string.toLowerCase();
  validateString = string[0].toUpperCase() + validateString.slice(1);
  return validateString;
}

export function lowString(string) {
  const validateString = string.toLowerCase();
  return validateString;
}

export function validateInput(string) {
  let validateString = string;
  validateString = safeString(validateString);
  validateString = uppString(validateString);
  return validateString;
}

export function normalizeDate(time) {
  const date = new Date(time);
  const day = parseData(date.getDate());
  const month = parseMonth(date.getMonth());
  const hours = parseData(date.getHours());
  const minutes = parseData(date.getMinutes());

  return `${day} ${month} в ${hours}:${minutes}`;
}

export function searchItem(title, search) {
  const titleLow = lowString(title);
  const searchLow = lowString(search);
  if (titleLow.search(searchLow) === -1) return false;
  return true;
}
