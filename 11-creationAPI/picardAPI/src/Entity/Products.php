<?php

namespace App\Entity;

use App\Repository\ProductsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductsRepository::class)]
class Products
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Name = null;

    #[ORM\Column(length: 255)]
    private ?string $ImageUrl = null;

    #[ORM\Column(length: 1000)]
    private ?string $Description = null;

    #[ORM\Column]
    private ?int $Price = null;

    #[ORM\Column]
    private ?int $Mark = null;

    #[ORM\Column]
    private ?bool $IsAvailable = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getImageUrl(): ?string
    {
        return $this->ImageUrl;
    }

    public function setImageUrl(string $ImageUrl): static
    {
        $this->ImageUrl = $ImageUrl;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): static
    {
        $this->Description = $Description;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->Price;
    }

    public function setPrice(int $Price): static
    {
        $this->Price = $Price;

        return $this;
    }

    public function getMark(): ?int
    {
        return $this->Mark;
    }

    public function setMark(int $Mark): static
    {
        $this->Mark = $Mark;

        return $this;
    }

    public function isAvailable(): ?bool
    {
        return $this->IsAvailable;
    }

    public function setAvailable(bool $IsAvailable): static
    {
        $this->IsAvailable = $IsAvailable;

        return $this;
    }
}
