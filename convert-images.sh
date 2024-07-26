#!/bin/bash

# Function to convert image to AVIF and remove the original file
convert_to_avif_webp() {
  local input_file="$1"
  local output_avif="${input_file%.*}.avif"
  local output_webp="${input_file%.*}.webp"

  # Check if the input file already has the .avif extension to avoid reprocessing
  if [[ "$input_file" != *.avif ]]; then
    avifenc "$input_file" "$output_avif" --min 0 --max 63 -a end-usage=q -a cq-level=32 -a tune=ssim -a deltaq-mode=3 -a sharpness=3 -y 420
    if [ $? -ne 0 ]; then
      echo "AVIF Conversion failed for $input_file"
      exit 1
    fi
    cwebp "$input_file" -o "$output_webp"
    if [ $? -ne 0 ]; then
      echo "WEBP Conversion failed for $input_file"
      exit 1
    fi
  fi
}

# Export the function so that it can be used with find's -exec
export -f convert_to_avif_webp

# Find all image files in the current directory and its subdirectories
find ./src/assets -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -exec bash -c 'convert_to_avif_webp "$0"' {} \;

echo "Conversion completed."
