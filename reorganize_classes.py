#!/usr/bin/env python3
"""
Script to reorganize BROTHERS_BY_CLASS structure
"""
import re

# Class definitions with their full titles and brother numbers
CLASSES = [
    ("BETA ALPHA", "BETA ALPHA — FALL 2025", ["227", "228", "229", "230", "231"]),
    ("ALPHA PSI", "ALPHA PSI — SPRING 2025", ["214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226"]),
    ("ALPHA CHI", "ALPHA CHI — FALL 2024", ["207", "208", "209", "210", "211", "212", "213"]),
    ("ALPHA PHI", "ALPHA PHI — SPRING 2024", ["201", "203", "204", "205", "206"]),
    ("ALPHA UPSILON", "ALPHA UPSILON — FALL 2023", ["199", "200"]),
    ("ALPHA TAU", "ALPHA TAU — SPRING 2023", ["191", "192", "193", "194", "195", "196", "197", "198"]),
    ("ALPHA SIGMA", "ALPHA SIGMA — FALL 2022", ["184", "185", "186", "187", "188", "189", "190"]),
    ("ALPHA RHO", "ALPHA RHO — SPRING 2022", ["177", "178", "179", "180", "181", "182", "183"]),
    ("ALPHA PI", "ALPHA PI — FALL 2021", ["170", "171", "172", "173", "174", "175", "176"]),
    ("ALPHA OMICRON", "ALPHA OMICRON — SPRING 2021", ["162", "163", "164", "165", "166", "167", "168", "169"]),
    ("ALPHA XI", "ALPHA XI - SPRING 2020", ["154", "155", "156", "157", "158", "159", "160", "161"]),
    ("ALPHA NU", "ALPHA NU - FALL 2019", ["150", "151", "152", "153"]),
    ("ALPHA MU", "ALPHA MU - SPRING 2019", ["145", "146", "147", "148", "149"]),
    ("ALPHA LAMBDA", "ALPHA LAMBDA - FALL 2018", ["141", "142", "143", "144"]),
    ("ALPHA KAPPA", "ALPHA KAPPA - SPRING 2018", ["133", "134", "135", "136", "137", "138", "140"]),
    ("ALPHA IOTA", "ALPHA IOTA - FALL 2017", ["128", "129", "130", "131", "132"]),
    ("ALPHA THETA", "ALPHA THETA - SPRING 2017", ["121", "122", "123", "124", "125", "126", "127"]),
    ("ALPHA ETA", "ALPHA ETA - FALL 2016", ["119"]),
    ("ALPHA ZETA", "ALPHA ZETA - SPRING 2016", ["111", "115", "116", "117", "118"]),
    ("ALPHA DELTA", "ALPHA DELTA - SPRING 2015", ["102", "103", "104", "105", "107", "108", "109", "110"]),
    ("ALPHA GAMMA", "ALPHA GAMMA - FALL 2014", ["97", "98", "99", "100", "101"]),
    ("ALPHA BETA", "ALPHA BETA - FALL 2013", ["93", "94", "95", "96"]),
    ("ALPHA ALPHA", "ALPHA ALPHA - SPRING 2013", ["88", "89", "90", "91", "92"]),
    ("PSI", "PSI - SPRING 2012", ["82", "83", "84", "85", "86", "87"]),
    ("CHI", "CHI - FALL 2011", ["80", "81"]),
    ("PHI", "PHI - SPRING 2011", ["77", "78", "79"]),
    ("UPSILON", "UPSILON - SPRING 2010", ["73", "74", "75", "76"]),
    ("TAU", "TAU - SPRING 2009", ["70", "71", "72"]),
    ("SIGMA", "SIGMA - SPRING 2008", ["63", "64", "65", "66", "67", "68", "69"]),
    ("RHO", "RHO - SPRING 2007", ["57", "58", "59", "60", "61", "62"]),
    ("PI", "PI - SPRING 2006", ["48", "49", "50", "51", "52", "53", "54", "55", "56"]),
    ("OMICRON", "OMICRON - FALL 2005", ["46", "47"]),
    ("XI", "XI - SPRING 2005", ["43", "44", "45"]),
    ("MU", "MU - SPRING 2004", ["37", "38", "39", "40", "41", "42"]),
    ("Kappa", "Kappa - SPRING 2003", ["34", "35", "36"]),
    ("Iota", "Iota - FALL 2002", ["31", "32", "33"]),
    ("Theta", "Theta - SPRING 2002", ["25", "26", "27", "28", "29", "30"]),
    ("Eta", "Iota - FALL 2002", ["24"]),
    ("Zeta", "Zeta - SPRING 2001", ["21", "22", "23"]),
    ("Epsilon", "Epsilon - FALL 2000", ["571", "572", "573", "574", "575"]),
    ("Delta", "Delta - SPRING 2000", ["11", "12", "13", "14", "15"]),
    ("Gamma", "Gamma - FALL 1999", ["9", "10"]),
    ("Beta", "Beta - SPRING 1999", ["6", "7", "8"]),
    ("Alpha", "Alpha - SPRING 1998", ["1", "2", "3", "4", "5"]),
]

print(f"Total classes to organize: {len(CLASSES)}")

