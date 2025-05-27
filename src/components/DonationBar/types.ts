import React from "react"

export interface Checkpoint {
  amount: number;
  aboutText: string;
  aboutImage?: string; //image path URL
}

export interface DonationBarProps {
  current: number;
  goal: number;
  checkpoints: Checkpoint[];
}

