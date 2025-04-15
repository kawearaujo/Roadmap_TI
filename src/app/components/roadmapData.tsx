import IA from "@/app/components/roads/IA";
import FullStack from "@/app/components/roads/FullStack";
import GameDev from "@/app/components/roads/GameDev";
import Robotica from "@/app/components/roads/Robotica";
import QA from "@/app/components/roads/QA";
import SistemasEmbarcados from "@/app/components/roads/SistemasEmbarcados";
import DataScience from "@/app/components/roads/DataScience";
import ScrumMaster from "@/app/components/roads/ScrumMaster";
import PM from "@/app/components/roads/PM";
export default function RoadmapPage() {

  const roadmapData = [
    FullStack(),
    GameDev(),
    Robotica(),
    QA(),
    SistemasEmbarcados(),
    DataScience(),
    IA(),
    ScrumMaster(),
    PM()
  ];
  return (roadmapData);
}