<?php

namespace App\DataFixtures;

use App\Entity\ApiProducts;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 50; $i++) {
            $product = new ApiProducts();
            $product->setName('product '.$i);
            $product->setImageUrl('https://picsum.photos/200/300');
            $product->setDescription('Petite description du produduit numéro '.$i. 'Ceci est un produit de test et incroyable');
            $product->setPrice(rand(10, 100));
            $product->setMark(rand(0, 10));
            $product->setAvailable(true);
            $manager->persist($product);
        }
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
