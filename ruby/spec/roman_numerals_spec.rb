require 'spec_helper'

require 'roman_numerals'

describe 'Roman Numerals' do
  describe 'Integer#to_roman' do
    {
      1 => 'I',
      5 => 'V',
      6 => 'VI',
      10 => 'X',
      11 => 'XI',
      15 => 'XV',
      16 => 'XVI',
    }.each do |num, output|
      it "should convert #{num} to '#{output}'" do
        expect(num.to_roman).to eq(output)
      end
    end
  end

  describe "Integer#roman_divmod" do
    it "should calculate roman characters and the remainder to be calculated" do
      expect(12.roman_divmod('A', 5)).to eq(['AA', 2])
    end
  end

  describe "String#to_roman" do
    {
      'I' => 1,
      'V' => 5,
      'VI' => 6,
      'X' => 10,
      'XI' => 11,
      'XV' => 15,
      'XVI' => 16
    }.each do |str, output|
      it "should convert '#{str}' to #{output}" do
        expect(str.to_roman).to eq(output)
      end
    end
  end
end
