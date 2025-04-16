import React from 'react';
import sportsImage from "/female-football-tournament.jpg";

export default function Sports() {
    return (
        <main className="pt-24 pb-16 bg-gray-50 min-h-screen">

            {/* Hero Banner */}
            <section className="relative h-64 bg-blue-800 text-white flex items-center justify-center">
                <h1 className="text-4xl font-bold">Sports in Sierra Leone</h1>
            </section>

            {/* Description Section */}
            <section className="max-w-4xl mx-auto px-4 md:px-12 mt-10">
                <div className="bg-white shadow-md rounded-xl p-6 text-gray-700 leading-relaxed space-y-6">
                    <h2 className="text-3xl font-bold text-blue-700">Description</h2>

                    <p>
                        Sports play an essential role in Sierra Leone's cultural identity and national development. With a passionate sporting community and a growing interest in both traditional and modern sports, the country has become a center for athletic talent and sporting achievements in West Africa.
                    </p>

                    <p>
                        The Ministry of Sports in Sierra Leone works tirelessly to promote and develop all forms of sports, from grassroots initiatives to international competitions. By fostering a culture of excellence and discipline, the Ministry strives to uplift the nation's athletes and provide opportunities for them to shine on the global stage.
                    </p>

                    <p>
                        Football remains the most popular sport, with a dedicated following at the national and grassroots levels. However, the Ministry also actively supports other sports such as athletics, basketball, volleyball, boxing, and more. With state-of-the-art sports facilities, training programs, and sports events, the Ministry ensures that athletes receive the support they need to reach their full potential.
                    </p>

                    <p>
                        Beyond entertainment, sports serve as a powerful tool for social cohesion, youth empowerment, and national pride. The Ministry's work in promoting sports extends beyond just creating champions—it helps to build healthier communities, reduce crime, and promote unity through shared sporting events.
                    </p>

                    <img
                        src={sportsImage}
                        alt="Sports in Sierra Leone"
                        className="rounded-lg shadow-md mt-6"
                    />
                </div>
            </section>

            {/* Teams & Athletes Section */}
            <section className="max-w-4xl mx-auto px-4 md:px-12 mt-16">
                <div className="bg-white shadow-md rounded-xl p-6 text-gray-700 leading-relaxed space-y-6">
                    <h2 className="text-3xl font-bold text-blue-700">Teams & Athletes</h2>

                    <p>
                        Sierra Leone boasts several national sports teams that compete in various international tournaments and competitions. These teams are the pride of the nation, and they represent the strength, determination, and passion of Sierra Leone's athletes.
                    </p>

                    <p>
                        Among the most popular and successful teams is the <strong>Sierra Leone National Football Team</strong>, also known as the Leone Stars. This team has achieved remarkable feats in international football, with a growing fanbase and increasing recognition in African football.
                    </p>

                    <p>
                        <strong>Athletics</strong> is another area where Sierra Leone has shown promise. The country has produced talented athletes who have competed in the African Championships, Commonwealth Games, and even the Olympics. These athletes inspire young people across the country to pursue sports at the highest level.
                    </p>

                    <p>
                        Other sports such as <strong>basketball, volleyball, boxing, and cricket</strong> have also seen a steady rise in participation and achievement. National athletes in these sports continue to push the boundaries and create opportunities for the next generation.
                    </p>

                    <p>
                        The Ministry of Sports is committed to identifying and nurturing talent at the grassroots level, providing athletes with the resources and training they need to succeed on both the national and international stage.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-blue-600">Notable Athletes</h3>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Mohamed Kallon</strong> – A legendary Sierra Leonean footballer who has played for top clubs in Europe and represented the country in multiple international competitions.</li>
                            <li><strong>Marie Torto</strong> – A prominent athlete in the field of athletics, known for her performances in the West African athletics circuit.</li>
                            <li><strong>James Kofi</strong> – A Sierra Leonean boxer who has competed at a high level, representing the country in international boxing competitions.</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Competitions Section */}
            <section className="max-w-4xl mx-auto px-4 md:px-12 mt-16">
                <div className="bg-white shadow-md rounded-xl p-6 text-gray-700 leading-relaxed space-y-6">
                    <h2 className="text-3xl font-bold text-blue-700">Competitions</h2>

                    <p>
                        Competitions form the backbone of sports development in Sierra Leone. Through local, regional, and international events, the Ministry of Sports encourages healthy competition, talent exposure, and national pride.
                    </p>

                    <p>
                        The Ministry, in collaboration with various sports associations, regularly organizes:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>National Sports Festival</strong> – A multi-sport event celebrating unity and excellence across all districts.</li>
                        <li><strong>Inter-Schools Championships</strong> – Youth-centered competitions that promote talent discovery in secondary schools.</li>
                        <li><strong>District & Regional Leagues</strong> – Football and athletics competitions held annually across the country.</li>
                        <li><strong>Presidential Sports Cup</strong> – A prestigious event for top-performing athletes and teams in various disciplines.</li>
                    </ul>

                    <p>
                        Internationally, Sierra Leone participates in:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>African Cup of Nations (AFCON)</strong> – With the Leone Stars proudly representing the nation.</li>
                        <li><strong>Commonwealth Games</strong> – Track and field athletes compete on an international stage.</li>
                        <li><strong>Olympic Games</strong> – Sierra Leone has consistently sent representatives to the Summer Olympics.</li>
                        <li><strong>FIFA World Cup Qualifiers</strong> – Competing with African nations for a spot in the World Cup.</li>
                    </ul>

                    <p>
                        These competitions help strengthen community engagement, promote discipline among athletes, and enhance the country’s visibility in global sporting arenas.
                    </p>
                </div>
            </section>

            {/* Recent Results Section */}
<section className="max-w-4xl mx-auto px-4 md:px-12 mt-16">
  <div className="bg-white shadow-md rounded-xl p-6 text-gray-700 leading-relaxed space-y-6">
    <h2 className="text-3xl font-bold text-blue-700">Recent Results</h2>

    <p>
      Here are some of the most recent highlights showcasing the progress and achievements of our athletes and national teams:
    </p>

    <ul className="space-y-4">
      <li>
        <strong>March 2025 - Leone Stars vs Liberia (AFCON Qualifier):</strong><br />
        Sierra Leone won 2-1 in a thrilling match played at the Siaka Stevens Stadium.
      </li>
      <li>
        <strong>February 2025 - National Inter-Schools Athletics Meet:</strong><br />
        St. Joseph's Secondary School emerged overall winner in the girls’ category, while Prince of Wales dominated the boys’ events.
      </li>
      <li>
        <strong>January 2025 - West African Junior Boxing Championship:</strong><br />
        Sierra Leone secured 2 silver medals and 1 gold, marking a significant leap in youth boxing performance.
      </li>
      <li>
        <strong>December 2024 - SLFA Premier League Finals:</strong><br />
        East End Lions defeated FC Kallon 1-0 to claim the national football championship.
      </li>
      <li>
        <strong>November 2024 - Sierra Leone Women’s Volleyball Team:</strong><br />
        Qualified for the African Zone 2 Championships for the first time in a decade.
      </li>
    </ul>

    <p>
      These results reflect the dedication and resilience of our athletes, coaches, and support staff. With continued investment and public support, we aim to raise the bar even higher.
    </p>
  </div>
</section>

        </main>
    );
}
