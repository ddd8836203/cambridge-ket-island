import os
import json
import fitz
from PIL import Image

os.makedirs("assets/images/u1", exist_ok=True)
os.makedirs("assets/images/u2", exist_ok=True)
os.makedirs("assets/images/u3", exist_ok=True)
os.makedirs("assets/pages", exist_ok=True)
os.makedirs("data", exist_ok=True)

doc1 = fitz.open(r"書本\KET Part1.pdf")
doc2 = fitz.open(r"書本\KET Part2.pdf")

def get_upright_page_image(doc, idx, dpi=250):
    page = doc[idx]
    pix = page.get_pixmap(dpi=dpi)
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    w, h = img.size
    # If portrait in Part 1 (like p1_01, p1_09, p1_10), rotate 90 counter-clockwise (or 270)
    # Wait: earlier we saw p1_01 (idx 0) rotated 90 deg CCW makes it upright! Let's check idx 8 and 9:
    # Earlier we did Image.open('temp/preview/p1_09.png').rotate(90, expand=True) on a 180-rotated image!
    # Wait: rotate(180) + rotate(90) = rotate(270) = rotate(-90) on original!
    if doc == doc1:
        if w < h:
            img = img.rotate(90, expand=True)
        else:
            img = img.rotate(180, expand=True)
    elif doc == doc2:
        if w < h:
            img = img.rotate(90, expand=True)
    return img

# Export clean upright full spreads for Unit 1-3 and Revision Unit 1-3 (180 DPI for reference/zoom)
spread_specs = [
    (doc1, 0, "map_of_units_p4_p5.jpg"),
    (doc1, 1, "u1_p6_p7.jpg"),
    (doc1, 2, "u1_p8_p9.jpg"),
    (doc1, 3, "u1_p10_p11.jpg"),
    (doc1, 4, "u2_p12_p13.jpg"),
    (doc1, 5, "u2_p14_p15.jpg"),
    (doc1, 6, "u2_p16_p17.jpg"),
    (doc1, 7, "u3_p18_p19.jpg"),
    (doc1, 8, "u3_p20_p21.jpg"),
    (doc1, 9, "u3_p22_p23.jpg"),
    (doc2, 14, "rev_u1_u2_p78_p79.jpg"),
    (doc2, 15, "rev_u3_u4_p80_p81.jpg"),
]

high_res_cache = {}
for doc, idx, fname in spread_specs:
    img = get_upright_page_image(doc, idx, dpi=240)
    high_res_cache[(id(doc), idx)] = img
    out_path = os.path.join("assets/pages", fname)
    img.save(out_path, quality=88, optimize=True)
    print(f"Saved spread: {out_path} ({img.size[0]}x{img.size[1]})")

# Crop specific interactive figures using normalized coordinates (x0, y0, x1, y1) on upright spread
crops = [
    # Unit 1 (p6-p7: idx 1)
    (doc1, 1, "assets/images/u1/u1_family_intro.jpg", (0.01, 0.17, 0.49, 0.46), "Unit 1 p.6 Tim, Mathilde & Emin unusual family intro"),
    (doc1, 1, "assets/images/u1/u1_sofia_family_tree.jpg", (0.495, 0.22, 0.755, 0.435), "Unit 1 p.7 Sofia's family tree diagram"),
    (doc1, 1, "assets/images/u1/u1_reading_part2_boys.jpg", (0.76, 0.315, 0.99, 0.96), "Unit 1 p.7 Reading Part 2 My family (Leo, Bastian, Callum)"),
    # Unit 1 (p8-p9: idx 2)
    (doc1, 2, "assets/images/u1/u1_fav_places.jpg", (0.04, 0.14, 0.48, 0.47), "Unit 1 p.8 Teenagers' five favourite places"),
    (doc1, 2, "assets/images/u1/u1_writing_part7_bookshop.jpg", (0.02, 0.82, 0.255, 0.965), "Unit 1 p.8 Practice 3-picture story (boy in bookshop)"),
    (doc1, 2, "assets/images/u1/u1_writing_part7_exam.jpg", (0.27, 0.71, 0.49, 0.975), "Unit 1 p.8 Exam Task Writing Part 7 (boy late for school bus 3 pictures)"),
    (doc1, 2, "assets/images/u1/u1_clocks.jpg", (0.505, 0.11, 0.785, 0.27), "Unit 1 p.9 Six clocks telling the time"),
    (doc1, 2, "assets/images/u1/u1_kyle_photo_album.jpg", (0.505, 0.40, 0.785, 0.89), "Unit 1 p.9 Kyle's daily routine photo album (A-H)"),
    # Unit 1 (p10-p11: idx 3)
    (doc1, 3, "assets/images/u1/u1_simon_island.jpg", (0.13, 0.03, 0.49, 0.31), "Unit 1 p.10 Listening Part 3 Simon home & school island map"),
    (doc1, 3, "assets/images/u1/u1_speaking_people_af.jpg", (0.51, 0.11, 0.92, 0.39), "Unit 1 p.11 Speaking Part 1 People descriptions (A-F)"),
    # Unit 2 (p12-p13: idx 4)
    (doc1, 4, "assets/images/u2/u2_hobbies_clubs.jpg", (0.01, 0.60, 0.28, 0.955), "Unit 2 p.12 School clubs messages (Camera, Camping, Music, Art)"),
    # Unit 2 (p14-p15: idx 5)
    (doc1, 5, "assets/images/u2/u2_invitations_cartoon.jpg", (0.055, 0.17, 0.49, 0.485), "Unit 2 p.14 Sam & Ruby invitations cartoons"),
    # Unit 2 (p16-p17: idx 6)
    (doc1, 6, "assets/images/u2/u2_hasan_bedroom.jpg", (0.505, 0.345, 0.935, 0.555), "Unit 2 p.17 Hasan and his bedroom (drums, camera, books)"),
    # Unit 3 (p18-p19: idx 7)
    (doc1, 7, "assets/images/u3/u3_breakfast_places_ae.jpg", (0.055, 0.08, 0.49, 0.405), "Unit 3 p.18 Where do you have breakfast pictures (A-E)"),
    (doc1, 7, "assets/images/u3/u3_wendy_grandma_omelette.jpg", (0.495, 0.19, 0.72, 0.53), "Unit 3 p.19 Wendy & Grandma mushroom omelette text chat"),
    # Unit 3 (p20-p21: idx 8)
    (doc1, 8, "assets/images/u3/u3_world_dishes_abc.jpg", (0.285, 0.04, 0.485, 0.345), "Unit 3 p.20 World dishes (A ajiaco, B kottbullar, C kalputi)"),
    (doc1, 8, "assets/images/u3/u3_cafe_menu.jpg", (0.495, 0.145, 0.91, 0.495), "Unit 3 p.21 Listening Part 2 Fast food cafe menu"),
    (doc1, 8, "assets/images/u3/u3_cooking_school_notice.jpg", (0.715, 0.50, 0.93, 0.69), "Unit 3 p.21 School of Cooking 16th February notice"),
    # Unit 3 (p22-p23: idx 9)
    (doc1, 9, "assets/images/u3/u3_speaking_food_3pics.jpg", (0.08, 0.345, 0.50, 0.595), "Unit 3 p.22 Speaking Part 2 Food habits 3 pictures"),
    (doc1, 9, "assets/images/u3/u3_speaking_exam_5meals.jpg", (0.07, 0.735, 0.50, 0.915), "Unit 3 p.22 Speaking Part 2 Exam Task 5 types of meals"),
    (doc1, 9, "assets/images/u3/u3_canteen_matching.jpg", (0.505, 0.21, 0.725, 0.575), "Unit 3 p.23 School canteen actions matching"),
    (doc1, 9, "assets/images/u3/u3_writing_boy_baking.jpg", (0.745, 0.325, 0.965, 0.595), "Unit 3 p.23 Practice 2-picture story (boy baking cakes)"),
    (doc1, 9, "assets/images/u3/u3_writing_part7_picnic_rain.jpg", (0.51, 0.755, 0.965, 0.895), "Unit 3 p.23 Exam Task Writing Part 7 (barbecue rain 3 pictures)"),
]

manifest_crops = []
for doc, idx, out_path, (x0, y0, x1, y1), desc in crops:
    img = high_res_cache[(id(doc), idx)]
    W, H = img.size
    box = (int(W * x0), int(H * y0), int(W * x1), int(H * y1))
    cropped = img.crop(box)
    cropped.save(out_path, quality=92, optimize=True)
    manifest_crops.append({
        "path": out_path,
        "width": cropped.size[0],
        "height": cropped.size[1],
        "source_spread": idx + 1,
        "description": desc
    })
    print(f"Cropped: {out_path} ({cropped.size[0]}x{cropped.size[1]})")

with open("data/image_manifest_u1_u3.json", "w", encoding="utf-8") as f:
    json.dump({"spreads_count": len(spread_specs), "crops": manifest_crops}, f, ensure_ascii=False, indent=2)

print("All extractions complete!")
