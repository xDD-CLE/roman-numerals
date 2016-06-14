ROMAN_CHARACTERS = {
  'X' => 10,
  'V' => 5,
  'I' => 1
}

class Integer
  def to_roman
    ''.tap do |roman_str|
      ROMAN_CHARACTERS.reduce(self) do |current_value, (character, divisor)|
        new_chars, remainder = current_value.roman_divmod(character, divisor)
        roman_str << new_chars
        remainder
      end
    end
  end

  def roman_divmod(roman_character, divisor)
    quotient, remainder = self.divmod divisor

    [roman_character * quotient, remainder]
  end
end


class String
  def to_roman
    self.chars.map { |c| ROMAN_CHARACTERS[c] }.reduce(:+)
  end
end
