class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        HashMap<Character, Integer> hm = new HashMap<>();

        for (char chs: s.toCharArray()) {
            hm.put(chs, hm.getOrDefault(chs, 0) + 1);
        }

        for (char cht: t.toCharArray()) {
            hm.put(cht, hm.getOrDefault(cht, 0) - 1);
        }

        for (int value: hm.values()) {
            if (value != 0) {
                return false;
            }
        }
        return true;
    }
}
